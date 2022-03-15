const btn=document.querySelector("#demo")
const bodyEl=document.querySelector("#body-content")
//const bodyHome=document.querySelector("#body")
const liEl=document.querySelector("#list1")
const screenshotArr=["./Demo_photos/Event_finder.png","./Demo_photos/Weather_Screenshot.png","./Demo_photos/Day scheduler demo.png"]

function displayScreenshot() {
    //alert("clicked")
    bodyEl.innerHTML=""   
    let newImage = document.createElement("IMG");
    newImage.setAttribute("src" , screenshotArr[1] )
    newImage.setAttribute("width", "100%");
    newImage.setAttribute("height", "100%");
    newImage.setAttribute("alt", "Screenshot Image");
    bodyEl.appendChild(newImage)
 
    let goBack=document.createElement('button')
    goBack.innerHTML="Go Back"
    bodyEl.appendChild(goBack)
    // goBack.addEventListener("click",appendPreviousProjects)
   
 }

//  function displayInfo(event){
//    event.preventDefault()
//     alert("clicked")
//     //bodyHome.innerHTML=""
//  }
 
 btn.addEventListener("click",displayScreenshot)
 //liEl.addEventListener("click",displayInfo)
