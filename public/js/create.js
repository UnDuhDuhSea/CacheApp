const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const budget_amount = document.querySelector('#plannedAmount').value.trim();
  const sub_category = document.querySelector('#sub-category').value.trim();

  if (title && sub_category && budget_amount) {
    const response = await fetch('/api/expense', {
      method: 'POST',
      body: JSON.stringify({ title, sub_category, budget_amount }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      location.reload();
    }
  }
};

document
  .querySelector('#createBudget')
  .addEventListener('submit', newFormHandler);
