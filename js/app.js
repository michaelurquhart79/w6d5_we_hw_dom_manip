// console.log('test');

document.addEventListener('DOMContentLoaded', () => {

  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (evt) {
  event.preventDefault();

  const instrumentListItem = document.createElement('li');

  const make = document.createElement('h2');
  make.textContent = evt.target.make.value;
  instrumentListItem.appendChild(make);

  const model = document.createElement('h3');
  model.textContent = evt.target.model.value;
  instrumentListItem.appendChild(model);

  const category = document.createElement('p');
  category.textContent = evt.target.category.value;
  instrumentListItem.appendChild(category);

  const condition = document.createElement('p');
  condition.textContent = evt.target.condition.value;
  instrumentListItem.appendChild(condition);

  const instrumentList = document.querySelector('#instrument-list');
  instrumentList.appendChild(instrumentListItem);

  evt.target.reset();
  // document.querySelector('#new-item-form').reset();
}

const handleDeleteAllClick = function (evt) {
  const instrumentList = document.querySelector('#instrument-list');
  instrumentList.innerHTML = '';
}
