const attendTalk = async (event) => {
    event.preventDefault();
    let talk_id = event.target.value;
    console.log(talk_id)
    const response = await fetch('/api/attend/', {
        method: 'POST',
        body: JSON.stringify({ talk_id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
        console.log('Added to Attendance')
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#attend-btn').addEventListener('click', attendTalk);