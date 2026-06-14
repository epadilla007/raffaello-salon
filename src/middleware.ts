import { defineMiddleware } from 'astro:middleware';

// Fix Keystatic OAuth redirect_uri localhost error on proxy-based platforms (Vercel, Netlify, etc.)
// Workaround for https://github.com/Thinkmill/keystatic/issues/1022
// On Vercel, @astrojs/vercel reconstructs request.url with 'localhost' as the host.
// The real public host is in x-forwarded-host. Keystatic reads req.url to build
// the redirect_uri for GitHub OAuth, so we must rewrite it before Keystatic's route runs.
export const onRequest = defineMiddleware(async (context, next) => {
  const isOAuthRoute =
    context.url.pathname.includes('/github/oauth/') ||
    context.url.pathname.includes('/github/login');

  if (isOAuthRoute) {
    const forwardedHost = context.request.headers.get('x-forwarded-host');
    const forwardedProto = context.request.headers.get('x-forwarded-proto');

    if (forwardedHost && forwardedProto && context.url.hostname === 'localhost') {
      const correctUrl = new URL(context.url);
      correctUrl.protocol = forwardedProto + ':';
      correctUrl.host = forwardedHost;
      correctUrl.port = '';

      const newRequest = new Request(correctUrl.toString(), {
        method: context.request.method,
        headers: context.request.headers,
        body: context.request.body,
        // @ts-ignore
        duplex: 'half',
      });

      Object.defineProperty(context, 'url', { value: correctUrl, writable: false });
      Object.defineProperty(context, 'request', { value: newRequest, writable: false });
    }
  }

  return next();
});
