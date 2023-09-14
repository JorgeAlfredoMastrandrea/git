const w3_panel = (() =>{
    var element = document.querySelector('#w3_panel');
    var style = element.currentStyle || window.getComputedStyle(element);
    document.getElementById("w3_panel").style.padding = "50px 10px 20px 30px";
    console.log(parseInt(style.paddingLeft));
    console.log(parseInt(style.paddingTop));
    console.log(parseInt(style.paddingRight));
    console.log(parseInt(style.paddingBottom));
});
console.log(w3_panel());