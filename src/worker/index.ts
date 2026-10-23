/**
 * Cloudflare Worker Entry Point for Ameyaa Industries
 * Serves Next.js static assets via Cloudflare Workers Static Assets binding (env.ASSETS)
 * and guarantees automatic redirection of non-existent routes to the Home Page.
 */

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Try serving the static asset from Next.js export
    let response = await env.ASSETS.fetch(request);

    // If route doesn't exist (404), automatically redirect to Home Page (/)
    if (response.status === 404) {
      // Clean 302 redirect to Home Page
      return Response.redirect(`${url.origin}/`, 302);
    }

    // Clone response to add enterprise security & performance headers
    const newHeaders = new Headers(response.headers);
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Immutable caching for hashed static chunks in /_next/static/
    if (url.pathname.startsWith('/_next/static/')) {
      newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
