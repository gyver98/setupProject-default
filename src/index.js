import setFocus from './utils/setfocus';
import store from './utils/store';
// unit testing case with DOM object
import applyClass from './utils/applyClass';
import logoSrc from './assets/img/logo.svg';

window.onload = () => {
  const inputElement = document.getElementById('editable-heading');
  // Get the value from localStorage
  inputElement.innerHTML = store.get('inputContent')
    ? store.get('inputContent')
    : 'do stuff&nbsp';
  // setFocus gets the value of the input and places the caret at the end
  setFocus(inputElement);
  // Handler for input changes in our fake input
  // Use the 'save' Module to place in localStorage
  inputElement.oninput = e => {
    store.set('inputContent', e.currentTarget.innerHTML);
  };

  // unit testing case with DOM object
  applyClass(document, 'something-new');

  // load logo svg image
  let img = document.createElement('img');
  const imageElement = document.getElementById('image-grid');
  img.setAttribute('src', logoSrc);
  imageElement.appendChild(img);
};
