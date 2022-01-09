export const copyToClipboard = (e) => {
  const messageToDisplay = document.createElement("div");
  messageToDisplay.classList.add("alert");
  messageToDisplay.classList.add("disappear");
  console.log(e.target.innerText);
  navigator.clipboard.writeText(e.target.innerText)
  .then(() => messageToDisplay.innerHTML = "successfully copied to clipboard!")
  .catch(err => messageToDisplay.innerHTML = err);

  e.target.parentElement.appendChild(messageToDisplay);
}