const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#newpost-title").value.trim();
    const description = document.querySelector("#newpost-des").value.trim();

    if (title && description) {
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert("Failed to create project");
        }
    }
};

document
    .querySelector(".create-post")
    .addEventListener("submit", newFormHandler);