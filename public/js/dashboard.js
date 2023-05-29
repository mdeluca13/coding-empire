// Create talk function
const createButton = document.getElementById("create");

const createTalk = async (event) => {
    event.preventDefault();

	let location = "A Location, Date and Time will be assigned to this new talk soon."

    const name = document.getElementById("talk-title").value;
    const description = document.getElementById("talk-description").value;

    if (name && description) {
        const response = await fetch(`/api/talk`, {
			method: 'POST',
			body: JSON.stringify({ name, description, location }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create talk');
		}

    }
};

createButton.addEventListener("click", createTalk);

