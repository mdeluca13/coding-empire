// const testingArray = document.querySelector('#testing').value
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


const removeAttend = async (event) => {
    event.preventDefault();
    const talkId = event.target.id
    let attendIdArray = event.target.title
    let userIdArray = event.target.value
    const loginUserId = event.target.name
    attendIdArray = attendIdArray.split(',');
    userIdArray = userIdArray.split(',');
    // for (var i = 0; i < attendIdArray.length -1; i++ ) {
    //     attendIdArray[i] = Number(attendIdArray[i])
    // }
    // attendIdArray = attendIdArray.filter(element => typeof element === 'number');
    // console.log("New array"+attendIdArray)
    // console.log(Number(attendIdArray))
    
    console.log('talkid '+talkId)
    console.log('attendIdArray '+attendIdArray)
    console.log('userIdArray '+userIdArray)
    console.log('loginUserId '+ loginUserId)
    

    if (userIdArray.includes(loginUserId)){
        console.log('Needs to be deleted')
        let userIndex = userIdArray.indexOf(loginUserId)
        userIndex = Number(userIndex)
        let attendId = attendIdArray[userIndex]
        console.log('attendidfromarray '+attendId)
        console.log('useridarray length '+ userIdArray.length)
        console.log('userindex '+ userIndex)
        
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