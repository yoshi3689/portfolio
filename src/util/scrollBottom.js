export const scrollToBottom = () => {
  console.log(document.body.scrollHeight);
  window.scrollTo(0, document.body.scrollHeight);
}