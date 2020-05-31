function generate(){
  var fr = new FileReader();
  fr.readAsDataURL(document.getElementsByTagName('input')[0].files[0]);
  fr.onload = function (){
    var im = new Image();
    im.onload = function (){
      window.canvas = document.getElementById("drawing");
      canvas.height = 1080;
      canvas.width = 1080;
      ctx = canvas.getContext("2d");
      ctx.drawImage(im, 0, 270, 1080, 810);
      var text = document.getElementById("txt").value.split("\n");
      ctx.font = "bold 30pt Arial";
      for (var i = 0; i < text.length; i++){
        wrapText(ctx, text[i], 50, 50 + 34*i, 1000, 34);
      }
      
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
