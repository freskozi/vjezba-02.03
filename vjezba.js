var div = document.getElementsByClassName("description")[0];


var y = document.createElement("h1");
y.innerHTML = "ovo je naš header"
div.parentNode.insertBefore(y, div);

var divInfo = document.createElement("div");
divInfo.className = "info";
div.parentNode.insertBefore(divInfo, div);