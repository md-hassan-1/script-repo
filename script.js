


fetch('https://dummyjson.com/products').then(responce => responce.json()).then((data)=>{


let products = data.products

let  div =  document.querySelector("#demo")


products.forEach(function(value,index){

    div.innerHTML += `   
     <div class="col-md-3 p-3  mb-2" >
     <div class="card mb-4">
    <div class="card-body">
    <img src='${value.images[0]}' class='img-fluid' >
        <h3 class="h4">${value.title}</h3>
       

        </div>
    </div>
    </div>`

})
    
})
