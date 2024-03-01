
// create playlist
let title = document.querySelector(" #title");
let description = document.querySelector(" #description");
let img = document.querySelector(" #img");
let submit = document.querySelector(" #Submit");


let mood = 'create';
let tmp;

// Create
let datapro ;

if(localStorage.product != null)
{
    datapro = JSON.parse(localStorage.product)
}else
{
    datapro = [];
}





submit.onclick = ()=>{
    let newpro = {
        title: title.value.toLowerCase(),
        description: description.value ,
        img: img.value , 
    }
    
    
    //clean data
    if( title.value != '' && description.value != ''  && img.value != '')
    {
        if(mood === "create"){
            datapro.push(newpro); 
        }
        else{
            datapro[tmp]= newpro;
            mood = 'create';
            submit.innerHTML = 'Create';
            submit.style.background = " #005186";
            submit.style.color = "#fff";
        }
    }

    
    // save localStorage
    localStorage.setItem('product' , JSON.stringify(datapro ));

    clearData();
    showdata();

}


// clear inputs 

function clearData()
{
    title.value = '';
    description.value = '';
    img.value = '' ; 
}

// read

function showdata()
{
    let table = '';
    for(let i= 0 ; i < datapro.length ; i++)
    {
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${datapro[i].title}</td>
            <td class="description">${datapro[i].description}</td>

            <td ><button onclick="updateData(${i})" id="update">update</button></td>
            <td class="hideButtom"><button onclick="deleteData(${i})" id="delete">delete</button></td>  
            <td class="showoverlay"><button onclick="show(${i})" id="delete">show</button></td>  

            </tr>
        `

    }
    document.getElementById("tbody").innerHTML = table ; 
    let btnDelete = document.getElementById('deleteAll');
    if(datapro.length > 0)
    {
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">delete All (${datapro.length})</button>
        `
    }else{
        btnDelete.innerHTML = '';
    }

    clearData();
}
showdata();


// delete

function deleteData(i)
{
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showdata()
    overlay.style.display = "none" ;
}

function deleteAll(){
    if(confirm("Are you sure")){
        localStorage.clear();
        datapro.splice(0);
        showdata()
        clearData()
    }
}

// update
function updateData(i){
    overlay.style.display = "none" ;
    title.value = datapro[i].title;
    description.value = datapro[i].description;
    img.value = datapro[i].img;

    submit.innerHTML = 'update';
    mood = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior: 'smooth',
    })
    submit.style.background = " #d2d21a";
    submit.style.color = "black";

}



// show
let updatenew = document.querySelector(".create-overlay #update");
let overlay = document.querySelector(" .create-overlay");  
let overtitle = document.querySelector(" .create-overlay #title");  
let overdescription = document.querySelector(" .create-overlay #description");  
let overimg = document.querySelector(" .create-overlay #img");  

function show(i){
    
    overlay.style.display = "flex";

    overtitle.value = datapro[i].title;
    overdescription.value = datapro[i].description;
    overimg.value = datapro[i].img;

    scroll({
        top:0,
        behavior: 'smooth',
    })
} 

let iconClose = document.querySelector(".icon-close");

iconClose.addEventListener("click" , () =>{
    overlay.style.display = "none" ;
});




