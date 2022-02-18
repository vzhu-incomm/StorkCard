function loadAnimation() {
    document.getElementById("stork").style.display = "block";
    document.getElementById("textOne").innerText = document.getElementById("inputOne").value;
    document.getElementById("textOneDiv").style.width = document.getElementById("stork").width;

    // horizontal();
    timer();
}


function timer() {
    var x = document.getElementById('stork').style.left;
    xnum = x.slice(0, -2);
    xnum = parseFloat(xnum);

    if (xnum < 100) {
        disp();

    } else {
        document.getElementById('stork').style.display = "none";
        document.getElementById('textOne').style.display = "none";
    }

    my_time = setTimeout('timer()', 1);
}


function disp() {
    var x = document.getElementById('stork').style.left;
    xnum = x.slice(0, -2);
    xnum = parseFloat(xnum);
    document.getElementById('stork').style.left = xnum + 0.05 + "vw";//horizontal move
    var x2 = document.getElementById('textOneDiv').style.left;
    xnum2 = x2.slice(0, -2);
    xnum2 = parseFloat(xnum2);
    document.getElementById('textOneDiv').style.left = xnum + 0.05 + "vw";//horizontal move

    // if (xnum == 40) {
    //     document.getElementById("bag").style.display = "block";
    // }
    if (xnum > 40) {
        bag();
    }
}

function bag() {
    if (document.getElementById("bag").style.display == "none") {
        document.getElementById("bag").style.display = "block";
    }
    var x = document.getElementById('bag').style.top;
    xnum = x.slice(0, -2);
    xnum = parseFloat(xnum);
    document.getElementById('bag').style.top = xnum + 0.025 + "vh";

}
