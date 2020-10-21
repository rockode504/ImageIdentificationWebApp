Webcam.set
({
width: 310,
height: 310,
image_format: 'jpeg',
jpeg_quality: 1000,
flip_horiz: true,

constraints: 
{
    facingMode:"environment"
}
});
 
camera=document.getElementById("camera");

Webcam.attach("#camera");

function takeShot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img id='capturedImage' src='"+data_uri+"'/>"
    }
    );
}

console.log("ml5 version:", ml5.version);

classifier=ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!");
}

function checkShot()
{
    img=document.getElementById("capturedImage");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
    }
}