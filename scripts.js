

const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const ctx = canvas.getContext('2d');

function getVideo() {
  navigator.mediaDevices.getUserMedia( { video: true, audio: false } )
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play()
    })
    .catch(() => {
      console.log("Acces denied !!! ")
    })
}


function paint() {
  const width = video.videoWidth
  const height = video.videoHeight
  canvas.width = width
  canvas.height = height

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
  },16)
  
}


function takePhoto() {
  snap.currentTime = 0
  snap.play()
}

getVideo()


video.addEventListener("canplay", paint)