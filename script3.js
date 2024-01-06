


fetch('https://dummyjson.com/posts').then(responce => responce.json()).then((data)=>{


let posts = data.posts

let  div =  document.querySelector("#demo")


posts.forEach(function(value,index){

    div.innerHTML += `   
     <div class="col-md-3 p-3  mb-2" >
     <div class="card mb-4">
    <div class="card-body">
        <h3 class="h4">${value.title}</h3>
    
        </div>
    </div>
    </div>`

})
    
})
