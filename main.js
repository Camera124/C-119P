function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1i7ZkgFRe/model.json', modelLoaded);
  console.log('ml5 version: ', ml5.version);
}

function modelLoaded() {
  console.log('Model Loaded!');
} 

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(255);
}