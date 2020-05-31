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
      ctx.drawImage(im, 0, canvas.height - this.height, this.height, this.width);
      var text = document.getElementById("txt").value.split("\n");
      ctx.font = "bold 50pt Arial";
      ctx.fillStyle="black";
      for (var i = 0; i < text.length; i++){
        if (i==2)
        wrapText(ctx, text[i], 50, 170/text.length*(i+1), 1000, 34);
      }
      download(canvas, 'meme.png');
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
function download(canvas, filename) {
  /// create an "off-screen" anchor tag
  var lnk = document.createElement('a'), e;

  /// the key here is to set the download attribute of the a tag
  lnk.download = filename;

  /// convert canvas content to data-uri for link. When download
  /// attribute is set the content pointed to by link will be
  /// pushed as "download" in HTML5 capable browsers
  lnk.href = canvas.toDataURL("image/png;base64");

  /// create a "fake" click-event to trigger the download
  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}
