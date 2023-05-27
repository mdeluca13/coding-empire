// attend talk functionality
const questionButton = document.getElementById("questions");

const addAttendance = async (event) => {
    event.preventDefault();
    const array = event.target.value
    const loginUserId = event.target.id
    const talkId = event.target.title
    console.log('array:'+array)
    console.log('testingloginuserid'+loginUserId)
    console.log('talkid:'+talkId)
    if (array.includes(loginUserId)){
        console.log('dont show because im already in the attendance!')
        alert('You are already attending this Talk. You can remove yourself from attendance below if you no longer want to attend.')
        // return true;
    }
    else {
        console.log('not in attendance yet')
        // return false;
        const response = await fetch('/api/attend/', {
            method: 'POST',
            body: JSON.stringify({ talkId }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.reload();
            console.log('Added to Attendance')
        } else {
            alert(response.statusText);
        }
    }
    
}

document.querySelector('.attend-btn').addEventListener('click', addAttendance);

// remove attend functionality
const removeAttend = async (event) => {
    event.preventDefault();
    const talkId = event.target.id
    let attendIdArray = event.target.title
    let userIdArray = event.target.value
    const loginUserId = event.target.name
    attendIdArray = attendIdArray.split(',');
    userIdArray = userIdArray.split(',');

    if (userIdArray.includes(loginUserId)){
        let userIndex = userIdArray.indexOf(loginUserId)
        userIndex = Number(userIndex)
        let attendId = attendIdArray[userIndex]
        
        const response = await fetch(`/api/attend/${attendId}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            document.location.reload();
            console.log('Removed from Attendance')
        } else {
            alert(response.statusText);
        }
    }
    else {
        alert('You have not registered to attend this course so do not need to be removed.')
    }

   
}

document.querySelector('.remove-attend-btn').addEventListener('click', removeAttend);

// ask question functionality
const askQuestions = async (event) => {
    event.preventDefault();

    const questionEl = document.getElementById("question");
    const question = questionEl.value;
    const talk_id = document.getElementById("questions").title;
    let created = new Date().toJSON();
	console.log(created);

    if (question) {
        const response = await fetch('/api/questions/', {
            method: 'POST',
            body: JSON.stringify({ question, created, talk_id }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.reload();
            console.log('added a question')
        } else {
            alert(response.statusText);
        }
    }
}

questionButton.addEventListener("click", askQuestions);

