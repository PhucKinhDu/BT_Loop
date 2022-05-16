function inSoChanLe() {
 var soChan = '';
 var soLe = '';

 for(var i = 0; i < 100; i++) {

  if(i % 2 == 0){
    soChan = soChan + i + ', ';
  }else{
    soLe = soLe + i + ', ';
  }
 }


}
//-------------------------------------------

function inTest(){
  var soChan = '';
  var soLe = '';
  
  for(var i = 1; i <= 4; i++){
    
    if(i % 2 == 0){
      // console.log('số chẵn', i);
      soChan = soChan + i + ', ';
    }else{
      // console.log('số lẻ', i);
      soLe = soLe + i + ', ';
    }
  
  }

  // document.getElementById('txtTest').innerHTML = 'Chẵn : ' + soChan + '<br> Lẻ : ' + soLe;
}

// document.getElementById('btnTest').onclick = inTest;


//-------------------------------------------


function soChia3() {
  var count = 0;

  for(var i = 1; i <= 1000; i++) {

    if(i % 3 == 0){
      count = count + 1;
    }
  }
  // document.getElementById('txtTest').innerHTML = 'Các số chia hết cho 3 là : ' + count;
}
// document.getElementById('btnTest').onclick = soChia3;


//-------------------------------------------


function inSoNguyenDuong() {
  // var count = 0;
  // var sum = 0;

  // while(sum < 10000) {
  //   count++;
  //   sum = sum + count;
  // }


  // for(var i = 0; i < 10000; i++) {
  //   if(sum < 10000){ 
  //     count++;
  //     sum = sum + count;
  //   }
  // }

  var num = 0;
  var sum = 0;

  for(var i = 0; i < 10000; i++) {

    if(sum < 10000){
      i++;
      sum = sum + i;
    }else{
      num = i;
    }

  }

  document.getElementById('txtTest').innerHTML = 'Số nguyên dương nhỏ nhất là : ' + num;
}
document.getElementById('btnTest').onclick = inSoNguyenDuong;


//-------------------------------------------

/**
 * Các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp.
 * B1: xác định yếu tố thay đổi (khởi tạo biến bước nhảy).
 * B2: thiết lập điều kiện lặp.
 * B3: cài đặt khối xử lý.
 * B4: thay đổi giá trị của biến bước nhảy.
 */


  document.getElementById('inTheDiv').onclick = function (){

  //Input: number 
  var input = Number(document.getElementById('iSo').value);
  //Output: string
  var output = '';

  //Xử lý:
  //B1
  var dem = 1;
  //B2
  while(dem <= input){// còn đúng điều kiện thì còn lặp
    //B3
    var div = '<div class="alert alert-success mt-2>Hello Tinh</div>';
    // output = output + div;
    output += div;
    //B4
    // dem += 1;
    dem++;
  }

  document.getElementById('ketQua1').innerHTML = output;
}












