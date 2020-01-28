// conditionals:
// Asking a true or false question and executing code
// Depending on the answer.
if (question) {
    //         // When the answer is true, execute code here
} else if (question) {
    // Asking another question if the first was false
    // When the answer is false execute code here
} else {
    // Run the dollowing code if all questions are false
}
// Transformation:
function drawRectangle(x,y,scale) {
    // save(): Starting the transformation
    ctx.save();
    // scale(x,y): Scales the object to be smaller or bigger depending on x or y value
    ctx.scale(scale,scale);
    // translate(x,y): Translates the origin of the canvas to the given x and y values
    ctx.translate(x*UNIT,y*UNIT)
    ctx.fillRect(0,0,100,100);
    //restore(): Restores the origin back to (0,0)
    ctx.restore();
}
