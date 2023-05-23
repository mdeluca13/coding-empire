// Delete Talk Function
const deleteTalk = async (event) => {
    event.preventDefault()
    console.log('click')
    let talkID = document.querySelector('.talk-id');
    talkID = talkID.value;
    const response = await fetch('/api/talk/' + talkID, {
        method: 'DELETE'
    });

    console.log('response through js file' + response)
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete.');
    };
};

document.querySelector('#delete-btn').addEventListener('click', deleteTalk);