function isTokenValid(token) {
  if (!token) {
    return false;
  }
  const isValid = await this.$store.dispatch("session/signUser", {
    token
  });
  return isValid;
}

export default function auth({ next, router }) {
  const token = this.$store.getters["session/getToken"];
  if (!isTokenValid(token)) {
    return router.push({ name: 'login' })
  }
  next(); 
}