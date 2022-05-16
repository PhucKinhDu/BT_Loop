


document.getElementById('btnKetQuaB2').onclick = function main(){

  var soX = Number(document.getElementById('nhapSoX').value);
  var soN = Number(document.getElementById('nhapSoN').value);

  var sum = 0;
  

  for(var nSo = 1; nSo <= soN; nSo++) {

    sum = sum + soMu(soX, nSo);

  }
  document.getElementById('ketQuaB2').innerHTML = 'Tổng là : ' + sum;
}

function soMu(a, b){
  var total = 0;

  return total = total + Math.pow(a, b);
}