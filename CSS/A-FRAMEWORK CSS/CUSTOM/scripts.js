const w3_panel = (() =>{
    var element = document.querySelector('#w3_panel');
    var style = element.currentStyle || window.getComputedStyle(element);
    // https://www.w3schools.com/jsref/prop_style_padding.asp
    document.getElementById("w3_panel").style.padding = "50px 10px 20px 30px";
    console.log(parseInt(style.paddingLeft));
    console.log(parseInt(style.paddingTop));
    console.log(parseInt(style.paddingRight));
    console.log(parseInt(style.paddingBottom));
});

var sliderTop = document.getElementById("myRangeTop");
var outputTop = document.getElementById("top");
outputTop.innerHTML = sliderTop.value; // Display the default slider value

var sliderBotton = document.getElementById("myRangeBotton");
var outputBotton = document.getElementById("botton");
outputBotton.innerHTML = sliderBotton.value; // Display the default slider value

var sliderLeft = document.getElementById("myRangeLeft");
var outputLeft = document.getElementById("left");
outputLeft.innerHTML = sliderLeft.value; // Display the default slider value

var sliderRight = document.getElementById("myRangeRight");
var outputRight = document.getElementById("right");
outputRight.innerHTML = sliderRight.value; // Display the default slider value

var top_    = 0;
var bottom_ = 0;
var left_   = 0;
var right_  = 0;

// Update the current slider value (each time you drag the slider handle)
sliderTop.oninput = function() {
  outputTop.innerHTML = this.value;
  top_ = this.value;
  document.getElementById("w3_panel").style.paddingTop = `${top_}px`;
}
sliderBotton.oninput = function() {
  outputBotton.innerHTML = this.value;
  bottom_ = this.value;
  document.getElementById("w3_panel").style.paddingBottom = `${bottom_}px`;
}
sliderLeft.oninput = function() {
  outputLeft.innerHTML = this.value;
  left_ = this.value;
  document.getElementById("w3_panel").style.paddingLeft = `${left_}px`;
}
sliderRight.oninput = function() {
  outputRight.innerHTML = this.value;
  right_ = this.value;
  document.getElementById("w3_panel").style.paddingRight = `${right_}px`;
}


console.log(w3_panel());