function draw()
{
 image(video,0,0,300,300);
 classifier.classify(video,gotResult);
}

function preload()
{

}

function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
 video=createCapture(VIDEO);
 video.hide();
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9ZUa255V4/model.json",modelLoaded);
}

function modelLoaded()
{
    console.log("model is loaded");
}

function gotResult(error,results)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(6);
    }
}
