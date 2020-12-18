var toggle=document.querySelector('#dark-mode-toggle');
var toggle_img=document.querySelector('#toggle-img')
var dark_mode=document.querySelector('#dark-mode');
var home=document.querySelector('#home');
var projects=document.querySelector('#projects');
var blogs=document.querySelector('#blogs');
var toolTip=document.querySelector("#toolTip")


var InitStatus=localStorage.getItem('switch');
checkInitialState()
function checkInitialState(){
if(InitStatus==="true"){
    toggle_img.src="Images/sun.svg"
    light_mode.className="light-mode"
    toolTip.title="Switch To Light Mode"
}
else{
    toggle_img.src="Images/Moon.svg"
    dark_mode.className="dark-mode"
    toolTip.title="Switch To Dark Mode"
}
}


toggle.addEventListener('click',()=>{
    var status=localStorage.getItem('switch');
    console.log(status)
    if(status==="true"){
        toggle_img.src="Images/Moon.svg"
        localStorage.setItem('switch',true);
        dark_mode.className="dark-mode"
        toolTip.title="Switch To Dark Mode"
    }
    else{
        toggle_img.src="Images/sun.svg"
        localStorage.setItem('switch',false);
        light_mode.className="light-mode"
        toolTip.title="Switch To Light Mode"
    }

})

home.addEventListener('click',() =>{
    checkInitialState()
})
projects.addEventListener('click',()=>{
    checkInitialState()
})
blogs.addEventListener('click',()=>{
    checkInitialState()
})
