const editExpenseHandler = async (event) => {
  event.preventDefault();

  const planned_amount = document.querySelector('#plannedAmount').value.trim();
  const id = document.querySelector('#plannedAmount');
  const amount_spent = document.querySelector('#actualAmount').value.trim();

  if (planned_amount && amount_spent) {
    const response = await fetch(`/api/expense/` + id.dataset.id, {
      method: 'PUT',
      body: JSON.stringify({ planned_amount , amount_spent }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update!');
    }
  }
};

document
    .querySelector("#editBudget")
    .addEventListener("submit", editExpenseHandler);