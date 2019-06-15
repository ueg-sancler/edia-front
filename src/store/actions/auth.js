export function auth(user, auth) {
  return { type: "SIGN_IN", user, auth }
}