function drawName(x,y,scale) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    drawD();
    drawA();
    drawN();
    drawI();
    drawE();
    drawL();
    ctx.restore();
}
function drawD() {
    ctx.fillStyle= "grey"
    ctx.fillRect(0, 0, 1*UNIT, 7*UNIT);
    ctx.fillRect(1*UNIT,6*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,0,3*UNIT, 1*UNIT);
    ctx.fillRect(4*UNIT,1*UNIT,1*UNIT,5*UNIT);
}
function drawA() {
    ctx.fillRect(6*UNIT,2*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(10*UNIT,2*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(8*UNIT,0*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,1*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,1*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,4*UNIT,4*UNIT,1*UNIT)
}
function drawN() {
    ctx.fillRect(12*UNIT,0*UNIT,1*UNIT,7*UNIT)
    ctx.fillRect(13*UNIT,2*UNIT,1*UNIT,1*UNIT)
    ctx.fillRect(14*UNIT,3*UNIT,1*UNIT,1*UNIT)
    ctx.fillRect(15*UNIT,4*UNIT,1*UNIT,1*UNIT)
    ctx.fillRect(16*UNIT,0*UNIT,1*UNIT,7*UNIT)
}
function drawI() {
    ctx.fillRect(18*UNIT,0,1*UNIT,7*UNIT)
}
function drawE() {
    ctx.fillRect(20*UNIT,0,5*UNIT,1*UNIT)
    ctx.fillRect(20*UNIT,0,1*UNIT,7*UNIT)
    ctx.fillRect(20*UNIT,6*UNIT,5*UNIT,1*UNIT)
    ctx.fillRect(21*UNIT,3*UNIT,3*UNIT,1*UNIT)

}
function drawL() {
    ctx.fillRect(26*UNIT,0,1*UNIT,7*UNIT)
    ctx.fillRect(26*UNIT,6*UNIT,5*UNIT,1*UNIT)
}