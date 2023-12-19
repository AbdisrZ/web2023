// untuk mengubah link active di topnav
var topnav = document.getElementsByClassName("topnav")[0];
var anchor = topnav.getElementsByTagName("a");
for (var i = 0; i < anchor.length; i++) {
 anchor[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
 });
}

function calculate() {
    var k = parseFloat(document.getElementById("k").value);
    var b = parseFloat(document.getElementById("b").value);
    var x = -b / k;
    document.getElementById("result").innerHTML = "Hasil: x = " + x;
}

function calculate() {
    var k1 = parseFloat(document.getElementById("k1").value);
    var k2 = parseFloat(document.getElementById("k2").value);
    var b1 = parseFloat(document.getElementById("b1").value);
    var b2 = parseFloat(document.getElementById("b2").value);
    var x1 = (b2 - b1) / (k1 - k2);
    var x2 = b1 - k1 * x1;
    document.getElementById("result").innerHTML = "Hasil: x1 = " + x1 + ", x2 = " + x2;
}

function calculate() {
    var x1 = parseFloat(document.getElementById("x1").value);
    var x2 = parseFloat(document.getElementById("x2").value);
    var difference = Math.abs(x1 - x2);
    document.getElementById("result").innerHTML = "Hasil: Jarak pertidaksamaan = " + difference;
   }

function calculate() {
    var x1 = parseFloat(document.getElementById("x1").value);
    var y1 = parseFloat(document.getElementById("y1").value);
    var x2 = parseFloat(document.getElementById("x2").value);
    var y2 = parseFloat(document.getElementById("y2").value);
    var difference = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    document.getElementById("result").innerHTML = "Hasil: Jarak pertidaksamaan linear = " + difference;
}