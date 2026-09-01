export const prerender = false;

export async function GET({ redirect }) {
  const client_id = process.env.OAUTH_CLIENT_ID;
  const redirect_uri = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo`;
  return redirect(redirect_uri, 302);
}