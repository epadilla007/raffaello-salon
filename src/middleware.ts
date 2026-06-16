import { defineMiddleware } from 'astro:middleware';

// Fix Keystatic GitHub OAuth on proxy platforms (Vercel, Netlify, etc.).
//
// On Vercel, @astrojs/vercel reconstructs `request.url` using the internal
// host, so Keystatic — which reads `new URL(req.url).origin` — builds the wrong
// GitHub `redirect_uri` (and the `?from` route) from `localhost` instead of the
// public domain. The real public host is in the `x-forwarded-host` header.
//
// We rewrite the request URL to the public origin on the Keystatic OAuth routes
// only, on BOTH `/github/login` (builds redirect_uri) and the `/github/oauth/*`
// callback (re-derives redirect_uri for the token exchange — it must match the
// login value or GitHub returns 401).
//
// Minimal clone: `new Request(correctedUrl, context.request)` preserves method,
// headers, body, and signal; only the URL is overridden. `new URL(request.url)`
// preserves the query string, so `?from`, `?code`, and `?state` survive intact.
// We do NOT manually re-stream the body or rebuild headers (the previous,
// reverted approach) — that is unnecessary and fragile.
//
// Refs: Keystatic issues #1022 / #978 (stefanprobst x-forwarded-host workaround).
export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  const isOAuthRoute =
    pathname.startsWith('/api/keystatic/github/login') ||
    pathname.startsWith('/api/keystatic/github/oauth/');

  if (isOAuthRoute) {
    const forwardedHost = context.request.headers.get('x-forwarded-host');
    const forwardedProto =
      context.request.headers.get('x-forwarded-proto') ?? 'https';

    if (forwardedHost && forwardedHost !== context.url.host) {
      const correctedUrl = new URL(context.request.url);
      correctedUrl.protocol = `${forwardedProto}:`;
      correctedUrl.host = forwardedHost; // sets hostname (+ port if present)
      correctedUrl.port = '';

      const correctedRequest = new Request(correctedUrl, context.request);

      Object.defineProperty(context, 'request', {
        value: correctedRequest,
        configurable: true,
      });
      Object.defineProperty(context, 'url', {
        value: correctedUrl,
        configurable: true,
      });
    }
  }

  return next();
});
