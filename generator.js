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
      ctx.drawImage(im, 0, 270, 810, 1080);
    }
    im.src = fr.result;
  }
}

