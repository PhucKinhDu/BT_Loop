

document.getElementById('btnSoNTB5').onclick = function() {

  var number = Number(document.getElementById('nhapSoB5').value);
  
  var ketQua = '';

  for(var iSo = 2; iSo <= number; iSo++){
    var checkSNT = kiemTraSoNguyenTo(iSo);
    if(checkSNT){
      ketQua += iSo + ', ';
    }
  }
  document.getElementById('ketQuaB5').innerHTML = ketQua;
}

function kiemTraSoNguyenTo(number) {
  var checkSNT = true;

  for(var i = 2; i <= Math.sqrt(number); i++){
    if(number % i == 0){
      checkSNT = false;
      break;
    }
  }
  return checkSNT;
}