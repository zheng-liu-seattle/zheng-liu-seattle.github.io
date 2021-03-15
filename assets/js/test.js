function loadjscssfile(filename){
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
    document.getElementsByTagName("head")[0].appendChild(fileref)
}


//bottom
var bottomTag = document.createElement("div");
bottomTag.style="height:20px;background-color:#DC222C;width:100%;text-align: center;";
var text = document.createTextNode("Apply Your Credit Card Today.");
// bottomTag.innerHTML = `<div id="smartbar-app" style="position: static;"><div class="smartbar-wrapper"><ul class="smartbar-barlist"><li id="smartbar-bar-133311" class="smartbar-bar smartbar-bar--bottom_cover smartbar-bar--active"><!----><div class="smartbar-bar__inner sb-flex-row sb-justify-content-center"><a href="#myModal" rel="modal:open">&nbsp;<div class="smartbar-object smartbar-object--message"><div class="smartbar-message" style="color: rgb(246, 243, 243);">Apply Imprint Credit Card today!</div></div></a></div><div class="smartbar-style" style="display: none;"><style type="text/css" id="smartbar-bar-133311-custom-style">
// #smartbar-bar-133311 .smartbar-object,
// #smartbar-bar-133311 .smartbar-message,
// #smartbar-bar-133311 .smartbar-button,
// #smartbar-bar-133311 .smartbar-countdown .sbc-digit,
// #smartbar-bar-133311 .smartbar-countdown .sbc-unit {
//   font-family: 'inherit';
//   font-size: 18px;
//   font-weight: 400;
//   font-style: inherit;
//   letter-spacing: 0px;
// }
// #smartbar-bar-133311 {
//   background-color: #1D1A1A;
//   background-image: ;
//   background-size: auto;
//   background-repeat: repeat;
//   height: 45px;
// }</style></div></li></ul><div class="specify-theme-style" style="display: none;"><style type="text/css" id="smartbar-specific-theme-Debut"></style></div><!----></div></div>`;
bottomTag.appendChild(text);
document.body.appendChild(bottomTag);

//top
var topTag = document.createElement("div");
//topTag.style="height:20px;background-color:#DC222C;width:100%;text-align: center;";
//var text = document.createTextNode("Apply Your Credit Card Today.");
topTag.innerHTML = `<div id="smartbar-app" style="position: static;"><div class="smartbar-wrapper"><ul class="smartbar-barlist"><li id="smartbar-bar-133084" class="smartbar-bar smartbar-bar--top_push smartbar-bar--active"><!----><div class="smartbar-bar__inner sb-flex-row sb-justify-content-center"><a href="#myModal" rel="modal:open">&nbsp;<div class="smartbar-object smartbar-object--message"><div class="smartbar-message" style="color: rgb(255, 255, 255);">Apply your Imprint credit card!</div></div></a></div><div class="smartbar-style" style="display: none;"><style type="text/css" id="smartbar-bar-133084-custom-style"> #smartbar-bar-133084 .smartbar-object, #smartbar-bar-133084 .smartbar-message, #smartbar-bar-133084 .smartbar-button, #smartbar-bar-133084 .smartbar-countdown .sbc-digit, #smartbar-bar-133084 .smartbar-countdown .sbc-unit { font-family: 'Overlock'; font-size: 16px; font-weight: 700; font-style: inherit; letter-spacing: 0px; } #smartbar-bar-133084 { background-color: #DC222C; background-image: ; background-size: auto; background-repeat: repeat; height: 45px; }</style></div></li></ul><div class="specify-theme-style" style="display: none;"><style type="text/css" id="smartbar-specific-theme-Debut"></style></div><!----></div></div>`;
document.body.appendChild(topTag);


loadjscssfile("https://raw.githack.com/zheng-liu-seattle/zheng-liu-seattle.github.io/master/assets/css/test.css");

//inject modal html

var modal = document.createElement("div");
modal.innerHTML = `<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content" style="width:300px;height:600px;bacground-color:yellow">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>`;
document.body.appendChild(modal);

var myFunction = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
};

var elements = document.getElementsByClassName("smartbar-bar__link");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
