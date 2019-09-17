const jsMessage = "If you can read this JS is working.";

const populatePTag = () => {
  const target = document.querySelector('#js-target');
  target.textContent = jsMessage;
}

populatePTag();
