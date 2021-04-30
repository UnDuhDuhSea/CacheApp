const deleteEntry = async (id) => {
    // if true, get id
  
    // create url
    const url = `/api/expense/${id}`;
    // send fetch request
    const response = await fetch(url, {
      method: 'DELETE',
    });
  
    // if good req
    if (response.ok) {
      // reload page
      document.location.replace('/dashboard');
    } else {
      // if bad
      // tell user bad request
      alert('Failed to delete project');
    }
  };
  
  const budgetEntryHandler = (event) => {
    //check if current trgt is delete button
    if (event.target.closest('.delete-button')) {
      const id = event.target.closest('.delete-button').getAttribute('data-id');
      deleteEntry(id);
    }
    // new conditions for different functions/buttons
  };
  // ​
  document
    .querySelector('.budget-entries')
    .addEventListener('click', budgetEntryHandler);
  