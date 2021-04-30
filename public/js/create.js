const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const budget_amount = document.querySelector("#plannedAmount").value.trim();

    if (title && budget_amount) {
        const response = await fetch("/api/expense", {
            method: "POST",
            body: JSON.stringify({ title, budget_amount }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Failed to create budget");
        }
    }
};

document
    .querySelector("#createBudget")
    .addEventListener("submit", newFormHandler);