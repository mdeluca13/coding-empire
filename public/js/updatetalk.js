const updateNameEl = document.querySelector('#update-name');
const updateDescriptionEl = document.querySelector('#update-description');

// Update post function
const updateTalk = async (event) => {
    console.log('click')
    event.preventDefault()
    let talkID = document.querySelector('.talk-id');
    talkID = talkID.value;
    let name = updateNameEl.value.trim()
    let description = updateDescriptionEl.value.trim()
    console.log(name)
    console.log(description)
    const response = await fetch('/api/talk/' + talkID, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: { 'Content-Type': 'application/json' },
    });

    console.log('response:'+response)
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update talk.');
    };
};

// Calling update post function on click
document.querySelector('#update-talk').addEventListener('click', updateTalk);