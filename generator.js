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
      var text = document.getElementById("txt").value;
      ctx.font = "bold 30pt Arial";
      ctx.fillText(text, 20, 50);
    }
    im.src = fr.result;
  }
}

