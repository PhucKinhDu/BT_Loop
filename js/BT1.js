
//C1: While
document.getElementById('btnTimSoB1').onclick = function() {
  var count = 0;
  var sum = 0;

  while (sum < 10000) {
    count++;
    sum += count;
  }
  document.getElementById('ketQuaB1').innerHTML = 'Số nguyên dương nhỏ nhất là: ' + count;
}


//C2: For
// document.getElementById('btnTimSoB1').onclick = function() {
//   var count = 0;
//   var sum = 0;

//   for(var i = 0; i < 10000; i++) {
//     if(sum < 10000){
//       count++;
//       sum += count;
//     }
//   }
//   document.getElementById('ketQuaB1').innerHTML = 'Số nguyên dương nhỏ nhất là: ' + count;
// }

