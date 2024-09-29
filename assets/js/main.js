var registerForm=document.querySelector('.registerForm');
var nameInput=document.querySelector('#name');
var descInput=document.querySelector('#desc');
var priceInput=document.querySelector('#price');
var products=[];
registerForm.onsubmit=function(e){
    e.preventDefault();
    var product={
        name:nameInput.value,
        desc:descInput.value,
        price:priceInput.value
    };
    products.push(product);
    printData();

} 
function printData(){
var data=``;
for(var i=0;i<products.length;i++){
    data+=`<tr>
    <td>${products[i].name}</td>
    <td>${products[i].desc}</td>
    <td>${products[i].price}</td>
    </tr>`
}
document.querySelector('tbody').innerHTML=data;
};





