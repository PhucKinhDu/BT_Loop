
//C1: While
document.getElementById('btnTinhGTB3').onclick = function() {

  var nhapSo = Number(document.getElementById('nhapSoB3').value);

  var giaiThua = 1;
  var dem = 1;

  while (dem <= nhapSo) {
    giaiThua *= dem;
    dem++;
  }
  document.getElementById('ketQuaB3').innerHTML = 'Kết quả : ' + giaiThua;
}

//C2: For 
// document.getElementById('btnTinhGTB3').onclick = function() {

//   var nhapSo = Number(document.getElementById('nhapSoB3').value);

//   var giaiThua = 1;

//   for(var dem = 1; dem <= nhapSo; dem++) {
//     giaiThua *= dem;

//   }
//   document.getElementById('ketQuaB3').innerHTML = 'Kết quả : ' + giaiThua;
// }








