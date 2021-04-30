const budgetEntryHandler = (event) => {
  //check if current trgt is delete button
  if (event.target.closest('.delete-button')) {
    const id = event.target.closest('.delete-button').getAttribute('data-id');
    deleteEntry(id);
  }
};
document
  .querySelector('.budget-entries')
  .addEventListener('click', budgetEntryHandler);
