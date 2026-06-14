import type { APIRoute } from 'astro';
import { makeHandler } from '@keystatic/astro/api';
import config from '../../../keystatic.config';

const keystatic = makeHandler({ config });

export const prerender = false;

export const ALL: APIRoute = async (context) => {
  const url = new URL(context.request.url);

  // @astrojs/vercel may reconstruct request.url with `localhost` as host
  // The actual public host is in the x-forwarded-host header
  const forwardedHost = context.request.headers.get('x-forwarded-host');
  const proto = context.request.headers.get('x-forwarded-proto') || 'https';

  if (forwardedHost && url.hostname === 'localhost') {
    const fixedUrl = new URL(url.pathname + url.search, `${proto}://${forwardedHost}`);
    const method = context.request.method;
    const hasBody = method !== 'GET' && method !== 'HEAD';
    const fixedRequest = new Request(fixedUrl.toString(), {
      method,
      headers: context.request.headers,
      ...(hasBody ? { body: context.request.body, duplex: 'half' as const } : {}),
    });
    return keystatic({ ...context, request: fixedRequest });
  }

  return keystatic(context);
};
