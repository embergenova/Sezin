let wrapper = document.querySelector(`.wrapper`);
let loginLink = document.querySelector(`.login-link`);
let registerLink = document.querySelector(`.register-link`);
let btnPopup= document.querySelector(`.btnLogin-popup`);

let iconClose= document.querySelector(`.icon-close`);

registerLink.addEventListener(`click`, ()=>{
    wrapper.classList.add(`active`);
});
loginLink.addEventListener(`click`, ()=>{
    wrapper.classList.remove(`active`);
});

btnPopup.addEventListener(`click`, ()=>{
    wrapper.classList.add(`active-popup`);
});

iconClose.addEventListener(`click`, ()=>{
    wrapper.classList.remove(`active-popup`);
});

let buttons = [ { id: "btn1",  title: "Anxious",},
    { id: "btn2",title: "Unmotivated",},
    {id: "btn3",title: "Lonely",},
    {id: "btn4",title: "Sad",},
    {id: "btn5", title: "Tired",},
    {id: "btn6",title: "Stressed",},
    {id: "btn7",title: "Positive",}   
]
items = [ {id: "item1", src:["des.jpg","bas.jpg","best.jpg","bea.jpg"]},
    { id: "item2", src:["flo.jpg","flowers.jpg","dess.jpg","nature.jpg"]},
    {id: "item3", src: ["best.jpg","flowers.jpg","dess.jpg","nature.jpg"] },
    { id: "item4", src: ["flo.jpg","flowers.jpg","dess.jpg","nature.jpg"]},
    { id: "item5", src: ["des.jpg","flowers.jpg","dess.jpg","nature.jpg"]},
    { id: "item6", src: ["flowers.jpg","flowers.jpg","dess.jpg","nature.jpg"]},
    { id: "item7", src: ["dess.jpg","flowers.jpg","dess.jpg","nature.jpg"]},
]
let btnItems = "";
for(let i=0; i<7; i++){
    btnItems += ` <button id="${buttons[i].id}" onclick="btnFunc('${buttons[i].id}')" class="feel_btn">${buttons[i].title}</button>`
}
let itemsList = "";
for(let i=0; i<7; i++){
    let images = ""
    for (let j=0; j<4; j++){
        images = images + `<div class="col-sm-6">
                        <img width="270" src="images/${items[i].src[j]}" alt="">
                   </div>`
    }
    itemsList += `
    <div id="${items[i].id}" class="row feel_images_item " >
         ${images}
    </div>
    `
}



document.getElementById("feel_buttons").innerHTML = btnItems;
document.getElementById("feel_images").innerHTML = itemsList;

document.getElementById("btn1").classList.add("feel_btn_active");   
document.getElementById("item1").classList.add("feel_images_item_active");   
   
function btnFunc(id){
    def();
    document.getElementById(`${id}`).classList.add("feel_btn_active");   
    if(id == "btn1"){
        document.getElementById("item1").classList.add("feel_images_item_active");   
    }else if (id == "btn2"){
        document.getElementById("item2").classList.add("feel_images_item_active");       
    }else if (id == "btn3"){
        document.getElementById("item3").classList.add("feel_images_item_active");       
    }  else if (id == "btn4"){
        document.getElementById("item4").classList.add("feel_images_item_active");       
    }  else if (id == "btn5"){
        document.getElementById("item5").classList.add("feel_images_item_active");       
    }  else if (id == "btn6"){
        document.getElementById("item6").classList.add("feel_images_item_active");       
    }  else if (id == "btn7"){
        document.getElementById("item7").classList.add("feel_images_item_active");       
    }      
}

function def(){
    for(let i=0; i<7; i++){
        document.getElementById(`${buttons[i].id}`).classList.remove("feel_btn_active");
        document.getElementById(`${items[i].id}`).classList.remove("feel_images_item_active");
        
    }
}
