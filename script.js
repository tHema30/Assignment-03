function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}









var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






// last subcribe
function subcribe() {
  var element = document.body;
  element.classList.toggle("error 404");
}


// map-----------------
function initMap() {
  var options= {
    zoom:20,
    center:{lat:9.657770,lng:80.159210}
  }
  var googlemap = new google.maps.Map(document.getElementById("map"), options);
}
