function generateTwitterLink(text) {
  let uri = `http://www.twitter.com/intent/tweet?text=${text}`;
  return uri;
}

export {
  generateTwitterLink
}