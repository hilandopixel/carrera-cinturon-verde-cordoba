export const prerender = false;

export async function GET() {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: githubUrl,
      'Cache-Control': 'no-cache',
    },
  });
}