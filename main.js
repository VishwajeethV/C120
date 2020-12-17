function setup() {
  canvas = createCanvas(300,250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",modelLoaded);
} 

function modelLoaded() {
   console.log("Model Loaded");

}

function draw()  {
   image(video,0,0,300,250);
   classifier.classify(video,gotResult);
}

function gotResult(error,results) {
  
  if(error) {
  console.log(error);
  }
  
  else {
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}

