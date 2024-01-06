


fetch('https://dummyjson.com/carts').then(responce => responce.json()).then((data)=>{


let cart = data.carts

let part = cart.product

let x = 1
let  div =  document.querySelector("#tbody")



cart.forEach(function(value,index){
    let sno = x++
    div.innerHTML += ` <tr><td>${sno}</td>
   <td>${value.products[0].title}</td>
   <td>${value.products[0].price}</td>
   <td>${value.products[0].quantity}</td>
   <td>${value.products[0].total}</td>
    <td> <img src='${value.products[0].thumbnail}' class='img-fluid' ></td></tr>

   `

})
    
})
