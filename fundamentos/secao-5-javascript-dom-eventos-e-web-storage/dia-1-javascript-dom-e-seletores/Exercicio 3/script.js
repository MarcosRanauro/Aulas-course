let titulo = document.querySelectorAll("#header-container");
    titulo[0].style.backgroundColor = "green";

document.querySelectorAll("#container")[0].style.backgroundColor = "grey";

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "pink";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";

let emergency = document.querySelectorAll(".emergency-tasks h3");
    emergency[0].style.backgroundColor = "purple";
    emergency[1].style.backgroundColor = "purple";

let noEmergency = document.querySelectorAll(".no-emergency-tasks h3");
    noEmergency[0].style.backgroundColor = "black";
    noEmergency[1].style.backgroundColor = "black";
    
document.getElementById("footer-container").style.backgroundColor = "#242124";