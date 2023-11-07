let menu=document.querySelector('.menu')
let menuactive=document.querySelector('.burger-menu button')
flag=true
menuactive.addEventListener('click',()=>{
if(flag===true){
  menu.style = "width:30%;padding:30px 10px;";
  flag=false
}else if(flag===false){
    menu.style = "width:0%;";
    flag=true
}

})
    
