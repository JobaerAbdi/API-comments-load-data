
const commentsLoadData = ()=>{
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
    .then(res => res.json())
    .then(data => dataLoad(data))
}

const dataLoad = users=>{
    const commentsContainer = document.getElementById('comments-div');
    commentsContainer.classList.add('cardStyle');
    users.forEach(user=>{
        console.log(user);
        const newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">ID No: ${user.id}</h5>
            <h5 class="card-title">Post ID No: ${user.postId}</h5>
            <h5 class="card-title">Name: ${user.name}</h5>
            <h5 class="card-title">E-mail: ${user.email}</h5>
            <h5 class="card-title">Discription: ${user.body}</h5>
        </div>
        `;
        commentsContainer.appendChild(newDiv);
    })
}

commentsLoadData();

//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------