
const secData = localStorage.getItem("selectedSection");
console.log(secData);

let secName = document.getElementById("secName");

secName.innerHTML=(secData);

// Update the time and manage class schedule


let A= document.getElementById("A")
let B = document.getElementById("B");
let C = document.getElementById("C");


A.addEventListener("click", function() {
    localStorage.setItem("selectedSection", "sec-A");
    window.location.reload();
});


B.addEventListener("click", function() {
    localStorage.setItem("selectedSection", "sec-B");
    window.location.reload();

});


C.addEventListener("click", function() {
    localStorage.setItem("selectedSection", "sec-C");
    window.location.reload();
});



const circleButton = document.getElementById('circleButton');
const options = document.getElementById('options');

circleButton.addEventListener('click', function() {
    circleButton.classList.toggle('expand');
});




if(secData===null){
   weekDay.style.display="none"
   schedualTextBox.style.display="none"
}
else{
  weekDay.style.display=""
    schedualTextBox.style.display=""
}

