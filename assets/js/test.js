//bottom
var bottomTag = document.createElement("div");
bottomTag.style="height:20px;background-color:#DC222C;width:100%;text-align: center;";
var text = document.createTextNode("Apply Your Credit Card Today.");
bottomTag.appendChild(text);
document.body.appendChild(bottomTag);

//top
var topTag = document.createElement("div");
//topTag.style="height:20px;background-color:#DC222C;width:100%;text-align: center;";
//var text = document.createTextNode("Apply Your Credit Card Today.");
topTag.innerHTML = `<div id="smartbar-app" style="position: static;"><div class="smartbar-wrapper"><ul class="smartbar-barlist"><li id="smartbar-bar-133084" class="smartbar-bar smartbar-bar--top_push smartbar-bar--active"><!----><div class="smartbar-bar__inner sb-flex-row sb-justify-content-center"><a href="http://www.imprint.co" target="_blank" class="smartbar-bar__link">&nbsp;</a><div class="smartbar-object smartbar-object--message"><div class="smartbar-message" style="color: rgb(255, 255, 255);">Apply your credit card!</div></div></div><div class="smartbar-style" style="display: none;"><style type="text/css" id="smartbar-bar-133084-custom-style"> #smartbar-bar-133084 .smartbar-object, #smartbar-bar-133084 .smartbar-message, #smartbar-bar-133084 .smartbar-button, #smartbar-bar-133084 .smartbar-countdown .sbc-digit, #smartbar-bar-133084 .smartbar-countdown .sbc-unit { font-family: 'Overlock'; font-size: 16px; font-weight: 700; font-style: inherit; letter-spacing: 0px; } #smartbar-bar-133084 { background-color: #DC222C; background-image: ; background-size: auto; background-repeat: repeat; height: 45px; }</style></div></li></ul><div class="specify-theme-style" style="display: none;"><style type="text/css" id="smartbar-specific-theme-Debut"></style></div><!----></div></div>`;
topTag.appendChild(text);
document.body.appendChild(topTag);
