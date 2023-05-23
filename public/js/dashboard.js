
const createButton = document.getElementById("create");

const createTalk = async (event) => {
    event.preventDefault();

	let date = "A Location, Date and Time will be assigned to this new talk soon."
	console.log(date);

    const name = document.getElementById("talk-title").value;
    const description = document.getElementById("talk-description").value;
	//const talkId = event.target.title;

    if (name && description) {
        const response = await fetch(`/api/talk`, {
			method: 'POST',
			body: JSON.stringify({ name, description, date }),
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

