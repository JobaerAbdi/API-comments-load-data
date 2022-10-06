
const commentsLoadData = ()=>{
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
    .then(res => res.json())
    .then(data => dataLoad(data))
}

const dataLoad = users=>{
    const commentsContainer = document.getElementById('comments-div');
    commentsContainer.classList.add('cardStyle');
    users.forEach(display=>{
        //console.log(display);
        const newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.innerHTML = `
        <div class="card-body">
            <h5 class="card-title bg-danger text-center text-white">ID No: ${display.id}</h5>
            <h5 class="card-title">Post ID No: ${display.postId}</h5>
            <h5 class="card-title">Name: ${display.name}</h5>
            <h5 class="card-title">E-mail: ${display.email}</h5>
            <h5 class="card-title">Discription: ${display.body}</h5>
            <button class="btn btn-warning" onclick="btnData(${display.id})">Individule Data</button>
        </div>
        `;
        commentsContainer.appendChild(newDiv);
    })
}

const btnData = userId=>{
    const url = `https://jsonplaceholder.typicode.com/comments?id=${userId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => btnDataDisplay(data[0]))
}

const btnDataDisplay = display=>{
    const displaySite= document.getElementById('btn-display');
    displaySite.classList.add('cardStyleBtn');
    displaySite.innerHTML=`
    <div class="card-bodyBtn">
        <h5 class="card-title">ID No: ${display.id}</h5>
        <h5 class="card-title">Post ID No: ${display.postId}</h5>
        <h5 class="card-title">Name: ${display.name}</h5>
        <h5 class="card-title">E-mail: ${display.email}</h5>
        <h5 class="card-title">Discription: ${display.body}</h5>
    </div>
    `;
}
  


//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------