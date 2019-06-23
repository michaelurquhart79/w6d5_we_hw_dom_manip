// console.log('test');

document.addEventListener('DOMContentLoaded', () => {

  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (evt) {
  event.preventDefault();

  // const instrumentListItem = document.createElement('li');
  //
  // const make = document.createElement('h2');
  // make.textContent = evt.target.make.value;
  // instrumentListItem.appendChild(make);
  //
  // const model = document.createElement('h3');
  // model.textContent = evt.target.model.value;
  // instrumentListItem.appendChild(model);
  //
  // const category = document.createElement('p');
  // category.textContent = evt.target.category.value;
  // instrumentListItem.appendChild(category);
  //
  // const condition = document.createElement('p');
  // condition.textContent = evt.target.condition.value;
  // instrumentListItem.appendChild(condition);
  //

  const instrumentListItem = createInstrumentListItem(evt.target);

  const instrumentList = document.querySelector('#instrument-list');
  instrumentList.appendChild(instrumentListItem);

  // evt.target.reset();
  // The above code works but I'm not sure why. I can only assume that in this context evt.target corresponds to the form as the form being submitted was the triggering event.
  document.querySelector('#new-item-form').reset();
}

// const addToItem = function (attrib, tag, form) {
//   attrib = document.createElement(tag);
//   attrib.textContent = form.attrib.value;
//   instrumentListItem.appendChild(attrib);
// }
// Couldn't get this to work;


const createInstrumentListItem = function (form) {

  const instrumentListItem = document.createElement('li');

  // instrumentListItem.addToItem(make, 'h2', form);
  // Couldn't get this to work

  const make = document.createElement('h2');
  make.textContent = form.make.value;
  instrumentListItem.appendChild(make);

  const model = document.createElement('h3');
  model.textContent = form.model.value;
  instrumentListItem.appendChild(model);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  instrumentListItem.appendChild(category);

  const condition = document.createElement('p');
  condition.textContent = form.condition.value;
  instrumentListItem.appendChild(condition);

  return instrumentListItem;
}

const handleDeleteAllClick = function (evt) {
  const instrumentList = document.querySelector('#instrument-list');
  instrumentList.innerHTML = '';
}
