const imageContainer=document.getElementsByClassName("imageContainer")[0]
const slideImg=document.getElementById("slideImg")
const prevBtn=document.getElementById("prevBtn")
const playPauseBtn=document.getElementById("playPauseBtn")
const nextBtn=document.getElementById("nextBtn")
const imageInp=document.getElementById("imageInp")
const positionInp=document.getElementById("positionInp")
const addImgBtn=document.getElementById("addImgBtn")

let imgArr=[
    "https://static.toiimg.com/thumb/msid-94150341,width-1280,height-720,imgsize-90192,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "https://www.yashrajfilms.com/images/default-source/Movies/Krrish/krrish_767x430.jpg?sfvrsn=498ccfcc_0",
    "https://i.ytimg.com/vi/NgBoMJy386M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB-0pxmt8JWJYaaE1-n-0YLLgD8gA",
    "https://i.ytimg.com/vi/8JDfE6fF_TI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqI7UuNUoV0gw2mnN1cznxHrZ2HQ",
    "https://media.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2020%2F07%2FFilm_Companion_baahubali-Lead-image-5.jpg"
]

let  currentIdx=0
let interval=null

slideImg.src=imgArr[currentIdx]

// slide image
function slideImage(){
    interval=setInterval(()=>{
        currentIdx=(currentIdx+1)%imgArr.length
        slideImg.src=imgArr[currentIdx]
    },5000)
}

// next image
nextBtn.addEventListener("click", ()=>{
    currentIdx=(currentIdx+1)%imgArr.length
    slideImg.src=imgArr[currentIdx]
})

// prev image
prevBtn.addEventListener("click", ()=>{
    currentIdx=(currentIdx-1+imgArr.length)%imgArr.length
    slideImg.src=imgArr[currentIdx]
})

// pause or play image
playPauseBtn.addEventListener("click", ()=>{
    if (interval){
        clearInterval(interval)
        interval=null
        playPauseBtn.textContent="Play"
    }
    else{
        slideImage()
        playPauseBtn.textContent="Pause"
    }
})

// add image
addImgBtn.addEventListener("click", ()=>{
    let imageInpValue=imageInp.value.trim()
    let positionInpValue=positionInp.value.trim()
    positionInpValue=Number(positionInpValue)
    
    if (!imageInpValue || !positionInpValue){
        alert("Please fill url and position both")
        return
    }
    else{
        imgArr.splice(positionInpValue-1, 0, `${imageInpValue}`)
    }
    
})

slideImage()