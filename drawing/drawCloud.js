function drawCloud(cloudColour,x,y) {
    ctx.save();
    ctx.fillStyle = cloudColour
    ctx.translate(x*UNIT,y*UNIT)
    ctx.fillRect(4*UNIT,6*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(0,10*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(1*UNIT,9*UNIT,1*UNIT,1*UNIT)
    ctx.fillRect(2*UNIT,8*UNIT,2*UNIT,1*UNIT)
    ctx.fillRect(3*UNIT,7*UNIT,1*UNIT,1*UNIT)
    ctx.fillRect(8*UNIT,7*UNIT,1*UNIT,1*UNIT)
    ctx.fillRect(9*UNIT,8*UNIT,1*UNIT,1*UNIT)
    ctx.fillRect(10*UNIT,9*UNIT,2*UNIT,1*UNIT)
    ctx.fillRect(12*UNIT,10*UNIT,1*UNIT,3*UNIT)
    ctx.fillRect(11*UNIT,13*UNIT,1*UNIT,1*UNIT)
    ctx.fillRect(1*UNIT,13*UNIT,10*UNIT,1*UNIT)
    ctx.restore();
}