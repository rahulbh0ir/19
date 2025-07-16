

const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");


function getVideo() {
  navigator.mediaDevices.getUserMedia( { video: true, audio: false } )
    .then(localMediaStream => {
      console.log(localMediaStream)
      video.srcObject = localMediaStream;
      video.play()
    })
}



function takePhoto() {
  console.log("hello")
  snap.play()
}


getVideo()