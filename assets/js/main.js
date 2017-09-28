'use strict';

//navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {
  audio: false,
  video: {
    facingMode: "user"
  }
};

function successCallback(stream) {
    var video = document.querySelector('video');
    video.srcObject = stream;
    video.onloadmetadata = function(e) {
        video.play();
    }
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).then(successCallback).catch(errorCallback);
