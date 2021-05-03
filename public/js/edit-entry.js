const editExpenseHandler = async (event) => {
  event.preventDefault();

  const budgetedAmount = document.querySelector('#plannedAmount').value.trim();
  const id = document.querySelector('#plannedAmount');
  const actualAmount = document.querySelector('#actualAmount').value.trim();

  if (budgetedAmount && actualAmount) {
    const response = await fetch(`/api/expense/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ budgetedAmount, actualAmount }),
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