function generate(){
  var fr = new FileReader();
  fr.readAsDataURL(document.getElementsByTagName('input')[0].files[0]);
  fr.onload = function (){
    var im = new Image();
    im.onload = function (){
      window.canvas = document.getElementById("drawing");
      canvas.height = this.height/5*9;
      canvas.width = this.width;
      window.ctx = canvas.getContext("2d");
      ctx.fillStyle="white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(im, 0, canvas.height - this.height, this.width, this.height);
      var text = document.getElementById("txt").value.split("\n");
      var fontSize = parseInt(canvas.width/20);
      var lineHeight = parseInt(fontSize * 1.1);
      ctx.font = "bold "+fontSize+"pt Arial";
      ctx.fillStyle="black";
      for (var i = 0; i < text.length; i++){
        wrapText(ctx, text[i], canvas.width*0.05, (canvas.height/9*4) - lineHeight * (text.length - (i - 1)), canvas.width*0.90, lineHeight);
      }
      download(canvas);
    }
    im.src = fr.result;
  }
}
function wrapText(context, text, marginLeft, marginTop, maxWidth, lineHeight)
    {
        var words = text.split(" ");
        var countWords = words.length;
        var line = "";
        for (var n = 0; n < countWords; n++) {
            var testLine = line + words[n] + " ";
            var testWidth = context.measureText(testLine).width;
            if (testWidth > maxWidth) {
                context.fillText(line, marginLeft, marginTop);
                line = words[n] + " ";
                marginTop += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, marginLeft, marginTop);
    }
function download(canvas) {
  document.getElementById("imag").src = canvas.toDataURL("image/png;base64");
}
