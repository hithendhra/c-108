function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WcNMLM5qW/',modelready);
}

function modelready()
{
    classifier.classify(gotresults);
    
}

function gotresults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
    console.log (results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

     document.getElementById("result_label").innerHTML= 'I can Hear - '+results[0].label;
     document.getElementById("result_confidence").innerHTML= 'Accuracy - '+(results[0].confidence*100).toFixed(2) +"%";

     img1 = document.getElementById('Alien1');
     img2 = document.getElementById('Alien2');
     img3 = document.getElementById('Alien3');
     img4 = document.getElementById('Alien4');

     if (results[0].label == "Clap")
     {
         img1.src = 'aliens-01.gif';
         img2.src = 'aliens-02.png';
         img3.src = 'aliens-03.png';
         img4.src = 'aliens-04.png';
     } else if (results[0].label == "Snap")
     {
         img1.src = 'aliens-01.png';
         img2.src = 'aliens-02.gif';
         img3.src = 'aliens-03.png';
         img4.src = 'aliens-04.png';
     } else if (results[0].label == "Humm")
     {
         img1.src = 'aliens-01.png';
         img2.src = 'aliens-02.png';
         img3.src = 'aliens-03.gif';
         img4.src = 'aliens-04.png';
     } else 
     {
         img1.src = 'aliens-01.gif';
         img2.src = 'aliens-02.png';
         img3.src = 'aliens-03.png';
         img4.src = 'aliens-04.gif';
     }
     
    }   
}