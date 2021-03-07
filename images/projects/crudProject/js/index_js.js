
var nameInp=document.getElementById('nameInput'),
    priceInp=document.getElementById('priceInput'),
    modelInp=document.getElementById('modelInput'),
    descriptionInp=document.getElementById('descriptionInput');
    nameInpUpdate=document.getElementById('nameInputUpdate'),
    priceInpUpdate=document.getElementById('priceInputUpdate'),
    modelInpUpdate=document.getElementById('modelInputUpdate'),
    descriptionInpUpdate=document.getElementById('descriptionInputUpdate');

var productsContainer;

if(localStorage.getItem("productsCollection")==null){
    productsContainer=[];
}
else{
    productsContainer=JSON.parse(localStorage.getItem("productsCollection"));
    display()
}

function addProduct()
{
    var product={
        productName:nameInp.value,
        productPrice:priceInp.value,
        productModel:modelInp.value,
        productDescription:descriptionInp.value
    }
    productsContainer.push(product);
    console.log(productsContainer);
    localStorage.setItem("productsCollection",JSON.stringify(productsContainer));
    display();
    clearInputs();
}

function display(){
    var temp="";
    for(var i=0;i<productsContainer.length;i++){
        temp+= `<div class="col-3 mb-3">
        <div class="card position-relative">
            <img src="images/product-placeholder.jpg" class="card-img-top">
            <div class="card-body bg-light">
                <h5 class="card-title">`+productsContainer[i].productName+`</h5>
                <p class="card-text">`+productsContainer[i].productDescription+`</p>
                <div class="btn-group col-6">
                    <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(`+i+`)">Delete</button>
                    <button class="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="updateModal(`+i+`)">Update</button> 
                </div>
            </div>
            <div class="position-absolute top-0 end-0 bg-primary p-3 text-light border">`+productsContainer[i].productPrice+`</div>
        </div>
    </div>`
    }
    document.getElementById('products-row').innerHTML=temp;
}

function clearInputs(){
    var inputs=document.getElementsByClassName('form-control');
    for(var i=0;i<inputs.length;i++)
    {
        inputs[i].value="";
    }
}

function searchProducts(search){
    var temp="";
    for(var i=0;i<productsContainer.length;i++){
        if(productsContainer[i].productName.includes(search))
        {
        temp+= `<div class="col-3 mb-3">
            <div class="card position-relative">
            <img src="images/product-placeholder.jpg" class="card-img-top">
            <div class="card-body bg-light">
                <h5 class="card-title">`+productsContainer[i].productName+`</h5>
                <p class="card-text">`+productsContainer[i].productDescription+`</p>
                <div class="btn-group col-6">
                    <button class="btn btn-outline-danger btn-sm">Delete</button>
                    <button class="btn btn-outline-warning btn-sm">Update</button>
                </div>
            </div>
            <div class="position-absolute top-0 end-0 bg-primary p-3 text-light border">`+productsContainer[i].productPrice+`</div>
            </div>
            </div>`
        }
    }
    document.getElementById('products-row').innerHTML=temp;
}

function deleteProduct(index){
    var deleted=productsContainer.splice(index,1);
    localStorage.setItem("productsCollection",JSON.stringify(productsContainer));
    display()
}

function updateModal(indexx){
    nameInpUpdate.value=productsContainer[indexx].productName;
    priceInpUpdate.value=productsContainer[indexx].productPrice;
    modelInpUpdate.value=productsContainer[indexx].productModel;
    descriptionInpUpdate.value=productsContainer[indexx].productDescription; 
    document.getElementById('index-container').value=indexx; 
    update()
}

function update(){
    var x=Number(document.getElementById('index-container').value)
    productsContainer[x].productName=nameInpUpdate.value
    productsContainer[x].productPrice=priceInpUpdate.value
    productsContainer[x].productModel= modelInpUpdate.value
    productsContainer[x].productDescription=descriptionInpUpdate.value
    localStorage.setItem("productsCollection",JSON.stringify(productsContainer));
    display();
}
