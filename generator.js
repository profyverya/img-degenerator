function generate(){
  window.ctx = document.getElementById("drawing").getContext("2d");
  var fr = new FileReader();
  fr.readAsDataURL(document.getElementsByTagName('input')[0].files[0]);
  fr.onload = function (){
    var im = new Image();
    im.onload = function (){
      im.src = fr.result;
      ctx.drawImage(im);
    }
  }
}

