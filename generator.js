function generate(){
  window.ctx = document.getElementById("drawing").getContext("2d");
  var fr = new FileReader();
  fr.readAsDataURL(document.getElementsByTagName('input')[0].files[0]);
  fr.onload = function (){
    document.getElementById("imag").src = fr.result;
    var img = document.getElementById("imag");
    ctx.drawImage(img);
  }
}

