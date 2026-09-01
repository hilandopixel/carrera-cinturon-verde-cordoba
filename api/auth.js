export default function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;

  res.redirect(302, githubUrl);
}