
const secData = localStorage.getItem("selectedSection");
console.log(secData);

let secName = document.getElementById("secName");

secName.innerHTML=(secData);

// Update the time and manage class schedule


let A1= document.getElementById("a1")
let A2= document.getElementById("a2")
let B1 = document.getElementById("b1");
let B2 = document.getElementById("b2");
let C1 = document.getElementById("c1");


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

