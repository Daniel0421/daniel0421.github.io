function drawZelda(type) {
    //conditionals:
    // Asking a true or false question and executing code
    // Depending on the answer.
    //     if (question) {
    //         // When the answer is true, execute code here
    //     } else {
    //         // WHen the answer is false execute code here
    //    }
    if (type == "default") {
        drawFace();
        drawClothes();
        drawFeet();
        drawShield();
    } else if (type == "walk1") {
        drawFace1();
        drawClothes1();
        drawFeet1();
        drawShield1();
    } else if (type == "walk2") {
        drawFace2();
        drawClothes2();
        drawFeet2();
        drawShield2();
    }



}
function drawFace() {
    ctx.fillStyle = "#93CE42";
    ctx.fillRect(5 * UNIT, 0, 6 * UNIT, 2 * UNIT)
    ctx.fillRect(4 * UNIT, 1 * UNIT, 1 * UNIT, 2 * UNIT)
    ctx.fillRect(11 * UNIT, 1 * UNIT, 1 * UNIT, 2 * UNIT)
    ctx.fillStyle = "#BA5425";
    ctx.fillRect(5 * UNIT, 2 * UNIT, 6 * UNIT, 2 * UNIT)
    ctx.fillRect(4 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT)
    ctx.fillRect(11 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT)
    ctx.fillStyle = "#93CE42";
    ctx.fillRect(6 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(9 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillStyle = "#BA5425";
    ctx.fillRect(6 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(9 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(7 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillStyle = "#EF9C4E";
    ctx.fillRect(2 * UNIT, 2 * UNIT, 1 * UNIT, 4 * UNIT)
    ctx.fillRect(3 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT)
    ctx.fillRect(3 * UNIT, 6 * UNIT, 10 * UNIT, 1 * UNIT)
    ctx.fillRect(13 * UNIT, 2 * UNIT, 1 * UNIT, 4 * UNIT)
    ctx.fillRect(12 * UNIT, 4 * UNIT, 1 * UNIT, 2 * UNIT)
    ctx.fillRect(5 * UNIT, 4 * UNIT, 1 * UNIT, 4 * UNIT)
    ctx.fillRect(7 * UNIT, 4 * UNIT, 2 * UNIT, 2 * UNIT)
    ctx.fillRect(10 * UNIT, 4 * UNIT, 1 * UNIT, 4 * UNIT)
    ctx.fillRect(6 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(9 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(6 * UNIT, 8 * UNIT, 4 * UNIT, 1 * UNIT)
}
function drawClothes() {
    ctx.fillStyle = "#93CE42";
    ctx.fillRect(3 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(7 * UNIT, 9 * UNIT, 5 * UNIT, 1 * UNIT)
    ctx.fillRect(11 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(10 * UNIT, 8 * UNIT, 2 * UNIT, 2 * UNIT)
    ctx.fillRect(9 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(7 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(9 * UNIT, 12 * UNIT, 3 * UNIT, 2 * UNIT)
    ctx.fillRect(12 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(7 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillStyle = "#BA5425"
    ctx.fillRect(7 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(8 * UNIT, 11 * UNIT, 4 * UNIT, 1 * UNIT)
    ctx.fillRect(7 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(13 * UNIT, 6 * UNIT, 1 * UNIT, 4 * UNIT)
    ctx.fillRect(12 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT)
    ctx.fillRect(14 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT)
    ctx.fillStyle = "#EF9C4E"
    ctx.fillRect(12 * UNIT, 9 * UNIT, 1 * UNIT, 3 * UNIT)
    ctx.fillRect(11 * UNIT, 10 * UNIT, 3 * UNIT, 1 * UNIT)
    ctx.fillRect(13 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(13 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT)
}
function drawFeet() {
    ctx.fillStyle = "#BA5425"
    ctx.fillRect(6 * UNIT, 14 * UNIT, 1 * UNIT, 2 * UNIT)
    ctx.fillRect(4 * UNIT, 15 * UNIT, 3 * UNIT, 1 * UNIT)
    ctx.fillRect(9 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT)
}
function drawShield() {
    ctx.fillStyle = "#BA5425"
    ctx.fillRect(0, 9 * UNIT, 6 * UNIT, 5 * UNIT)
    ctx.fillRect(1 * UNIT, 8 * UNIT, 5 * UNIT, 1 * UNIT)
    ctx.fillRect(6 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillStyle = "#EF9C4E"
    ctx.fillRect(6 * UNIT, 10 * UNIT, 1 * UNIT, 4 * UNIT)
    ctx.fillRect(1 * UNIT, 14 * UNIT, 5 * UNIT, 1 * UNIT)
    ctx.fillRect(2 * UNIT, 9 * UNIT, 1 * UNIT, 4 * UNIT)
    ctx.fillRect(1 * UNIT, 10 * UNIT, 3 * UNIT, 1 * UNIT)
}
function drawFace1() {
    ctx.fillStyle = "#93CE42"
    ctx.fillRect(5 * UNIT, 0, 4 * UNIT, 1 * UNIT)
    ctx.fillRect(3 * UNIT, 1 * UNIT, 5 * UNIT, 1 * UNIT)
    ctx.fillRect(1 * UNIT, 2 * UNIT, 3 * UNIT, 2 * UNIT)
    ctx.fillRect(5 * UNIT, 2 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(0, 3 * UNIT, 1 * UNIT, 2 * UNIT)
    ctx.fillRect(2 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(2 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(10 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillStyle = "#BA5425"
    ctx.fillRect(8 * UNIT, 1 * UNIT, 4 * UNIT, 3 * UNIT)
    ctx.fillRect(7 * UNIT, 2 * UNIT, 1 * UNIT, 4 * UNIT)
    ctx.fillRect(6 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(12 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(10 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(3 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT)
    ctx.fillRect(5 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillStyle = "#EF9C4E"
    ctx.fillRect(4 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(4 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT)
    ctx.fillRect(5 * UNIT, 4 * UNIT, 2 * UNIT, 2 * UNIT)
    ctx.fillRect(6 * UNIT, 6 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(8 * UNIT, 4 * UNIT, 2 * UNIT, 4 * UNIT)
    ctx.fillRect(10 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT)
    ctx.fillRect(11 * UNIT, 4 * UNIT, 1 * UNIT, 4 * UNIT)
    ctx.fillRect(12 * UNIT, 5 * UNIT, 2 * UNIT, 1 * UNIT)
}
function drawClothes1() {
    ctx.fillStyle = "#93CE42"
    ctx.fillRect(4 * UNIT, 7 * UNIT, 4 * UNIT, 2 * UNIT)
    ctx.fillRect(3 * UNIT, 8 * UNIT, 7 * UNIT, 1 * UNIT)
    ctx.fillRect(4 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(8 * UNIT, 9 * UNIT, 3 * UNIT, 2 * UNIT)
    ctx.fillRect(7 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT)
    ctx.fillRect(5 * UNIT, 12 * UNIT, 2 * UNIT, 2 * UNIT)
    ctx.fillRect(2 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT)
    ctx.fillRect(1 * UNIT, 13 * UNIT, 10 * UNIT, 1 * UNIT)
    ctx.fillStyle = "#BA5425"
    ctx.fillRect(1 * UNIT, 9 * UNIT, 3 * UNIT, 3 * UNIT)
    ctx.fillRect(3 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT)
    ctx.fillRect(2 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(7 * UNIT, 12 * UNIT, 4 * UNIT, 1 * UNIT)
    ctx.fillRect(10 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillRect(11 * UNIT, 8 * UNIT, 2 * UNIT, 3 * UNIT)
    ctx.fillRect(10 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT)
    ctx.fillStyle = "#EF9C4E"
    ctx.fillRect(5 * UNIT, 9 * UNIT, 3 * UNIT, 2 * UNIT)
    ctx.fillRect(5 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT)
    ctx.fillRect(13 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT)
}
function drawFeet1() {
    ctx.fillStyle = "#BA5425"
    ctx.fillRect(4 * UNIT, 14 * UNIT, 4 * UNIT, 2 * UNIT)
    ctx.fillRect(8 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT)

}
function drawShield1() {
    ctx.fillStyle = "#BA5425"
    ctx.fillRect(14 * UNIT, 4 * UNIT, 1 * UNIT, 9 * UNIT)
}
function drawFace2() {
    ctx.fillStyle = "#93CE42"
    ctx.fillRect(5* UNIT,1* UNIT,3* UNIT,2* UNIT)
    ctx.fillRect(8* UNIT,1* UNIT,1* UNIT,1* UNIT)
    ctx.fillRect(3* UNIT,2* UNIT,2* UNIT,1* UNIT)
    ctx.fillRect(5* UNIT,3* UNIT,2* UNIT,1* UNIT)
    ctx.fillRect(1* UNIT,3* UNIT,3* UNIT,2* UNIT)
    ctx.fillRect(0,4* UNIT,1* UNIT,2* UNIT)
    ctx.fillRect(2* UNIT,3* UNIT,2* UNIT,3* UNIT)
    ctx.fillRect(2* UNIT,6* UNIT,1* UNIT,1* UNIT)
    ctx.fillRect(10* UNIT,5* UNIT,1* UNIT,1* UNIT)
    ctx.fillStyle = "#EF9C4E"
    ctx.fillRect(4* UNIT,3* UNIT,1* UNIT,3* UNIT)
    ctx.fillRect(5* UNIT,4* UNIT,1* UNIT,3* UNIT)
    ctx.fillRect(6* UNIT,5* UNIT,1* UNIT,3* UNIT)
    ctx.fillRect(7* UNIT,7* UNIT,1* UNIT,1* UNIT)
    ctx.fillRect(8* UNIT,5* UNIT,2* UNIT,3* UNIT)
    ctx.fillRect(10* UNIT,7* UNIT,2* UNIT,2* UNIT)
    ctx.fillRect(11* UNIT,5* UNIT,1* UNIT,2* UNIT)
    ctx.fillRect(12* UNIT,6* UNIT,2* UNIT,1* UNIT)
    ctx.fillStyle = "#BA5425"
    ctx.fillRect(8* UNIT,2* UNIT,4* UNIT,3* UNIT)
    ctx.fillRect(12* UNIT,3* UNIT,1* UNIT,1* UNIT)
    ctx.fillRect(7* UNIT,3* UNIT,1* UNIT,4* UNIT)
    ctx.fillRect(6* UNIT,4* UNIT,1* UNIT,1* UNIT)
    ctx.fillRect(10* UNIT,6* UNIT,1* UNIT,1* UNIT)
    ctx.fillRect(3* UNIT,6* UNIT,2* UNIT,2* UNIT)
    ctx.fillRect(5* UNIT,7* UNIT,1* UNIT,1* UNIT)
}
function drawClothes2() {
    ctx.fillStyle = "#93CE42"
    ctx.fillRect(4* UNIT,8* UNIT,4* UNIT,1* UNIT)
    ctx.fillRect(5* UNIT,9* UNIT,2* UNIT,1* UNIT)
    ctx.fillRect(2* UNIT,9* UNIT,1* UNIT,1* UNIT)
    ctx.fillRect(1* UNIT,11* UNIT,1* UNIT,2* UNIT)
    ctx.fillRect(2* UNIT,12* UNIT,1* UNIT,2* UNIT)
    ctx.fillRect(3* UNIT,13* UNIT,4* UNIT,2* UNIT)
    ctx.fillRect (7* UNIT,14* UNIT,4* UNIT,1* UNIT)
    ctx.fillRect(11* UNIT,13* UNIT,1* UNIT,1* UNIT)
    ctx.fillRect(7* UNIT,12* UNIT,3* UNIT,1* UNIT)
    ctx.fillRect(9* UNIT,11* UNIT,2* UNIT,1* UNIT)
    ctx.fillRect(10* UNIT,10* UNIT,1* UNIT,1* UNIT)

    ctx.fillStyle = "#EF9C4E"
    ctx.fillRect(8* UNIT,8* UNIT,2* UNIT,3* UNIT)
    ctx.fillRect(7* UNIT,9* UNIT,2* UNIT,3* UNIT)
    ctx.fillStyle = "#BA5425"
}
function drawFeet2() {
    ctx.fillStyle = "#93CE42"
    ctx.fillStyle = "#EF9C4E"
    ctx.fillStyle = "#BA5425"
}
function drawShield2() {
    ctx.fillStyle = "#93CE42"
    ctx.fillStyle = "#EF9C4E"
    ctx.fillStyle = "#BA5425"
}