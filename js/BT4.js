
//C1: While
document.getElementById('btnTaoTheMauB4').onclick = function() {

  var divRed = '<div class="alert alert-danger">Div Red</div>';
  var divBlue = '<div class="alert alert-primary">Div Blue</div>';

  var output = '';
  var num = 1;

  while (num <= 10) {
    if(num % 2 == 0) {
      output += divRed; 
    }else{
      output += divBlue; 
    }
    num++;
  }
  document.getElementById('ketQuaB4').innerHTML = output;
}


//C2: For
// document.getElementById('btnTaoTheMauB4').onclick = function() {

//   var divRed = '<div class="alert alert-danger">Div Red</div>';
//   var divBlue = '<div class="alert alert-primary">Div Blue</div>';

//   var output = '';
//   var count = 1;

//   for(var i = 1; i <= 10; i++) {

//     if(i % 2 == 0) {
//       output += divRed;
//     }else{
//       output += divBlue;
//     }
//   }
//   document.getElementById('ketQuaB4').innerHTML = output;
// }




/**
 * 
 * Khối 1: tạo hàm, gắn sự kiện cho button
 * 
 * Khối 2: các bước xử lý.
 * B1: lấy giá trị từ id của thẻ
 * B2: tạo vòng lặp, chạy từ 1 -> 10
 * B3: nếu % 2 == 0 thì là số chẵn, chẵn = màu đỏ
 *     ngược lại là lẻ, lẻ = màu xanh
 * B4: xuất kết quả
 * 
 * Khối 3: hiện thẻ div lên UI 
 * 
 */