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
        document.getElementById('box').style.display = "none";
        // document.getElementById('cloth').style.display = "block";
        // document.getElementById("textTwo").innerText = document.getElementById("inputTwo").value;
    }
    if (xnum > 45) {
        box();
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
    //     document.getElementById("box").style.display = "block";
    // }

}

function box() {

    if (document.getElementById("boxback").style.display == "none") {
        document.getElementById("boxback").style.display = "block";
        document.getElementById("boxfront").style.display = "block";
        document.getElementById("boxlid").style.display = "block";
    }
    var y = document.getElementById('boxback').style.top;
    ynum = y.slice(0, -2);
    ynum = parseFloat(ynum);
    if (ynum < 26) {
        document.getElementById('boxback').style.top = ynum + 0.025 + "vh";
        document.getElementById('boxfront').style.top = ynum + 0.025 + "vh";
        document.getElementById('boxlid').style.top = ynum + 0.025 + "vh";
        document.getElementById('giftcard').style.top = ynum + 0.025 + "vh";

    } else if (ynum < 41) {
        if (document.getElementById("giftcard").style.display == "none") {
            document.getElementById("giftcard").style.display = "block";
        }
        document.getElementById("textTwoText").style.display = "flex";
        document.getElementById('boxback').style.top = ynum + 0.025 + "vh";
        document.getElementById('giftcard').style.top = ynum + 0.025 + "vh";
        document.getElementById('textTwoText').innerText = document.getElementById("inputTwo").value;
        document.getElementById('textTwoText').style.top=document.getElementById('giftcard').style.top;
        //document.getElementById('textTwoText').style.height=document.getElementById('giftcard').style.height;

        //console.log(document.getElementById('textTwoText').style.top);
        document.getElementById('boxfront').style.top = ynum + 0.025 + "vh";
    } else if (ynum < 60){
        document.getElementById('boxback').style.top = ynum + 0.025 + "vh";
        document.getElementById('boxfront').style.top = ynum + 0.025 + "vh";
    }

    // var x = document.getElementById('boxlid').style.top;
    // xnum = x.slice(0, -2);
    // xnum = parseFloat(xnum);
    // document.getElementById('boxback').style.top = xnum + 0.025 + "vh";
    // document.getElementById('boxfront').style.top = xnum + 0.025 + "vh";
    // document.getElementById('boxlid').style.top = xnum + 0.025 + "vh";

}
