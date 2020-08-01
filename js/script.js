var currentProgress = 0;

function addValue(pValue) { 
  if (currentProgress + pValue <= 100){      currentProgress += pValue;
}
  else {
    currentProgress = 100;
  }
  $(".jProgress").css("width", currentProgress+"%");
  $(".jProgress").html(currentProgress+"%");
}

function init() {
  $(".jBtnAdd1").click(function() {
    addValue(1);} );
  $(".jBtnAdd3").click(function() {
    addValue(3);} );$(".jBtnAdd7").click(function() {
    addValue(7);} );
  console.log("init finished");
}

init();