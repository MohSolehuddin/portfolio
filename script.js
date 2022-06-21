function TampilkanSertifikat() {
  let nilai = document.getElementById("OptionKompetensi").value;
  function print(Value, url) {
    if (nilai == Value) {
      document.getElementById("OutputSertifikat").innerHTML = `<img class="SizeImg" src="${url}" alt="${nilai}" width="100%">`;
    }
  }
  print("HTML","img/html.png");
  print("CSS","img/css.png");
  print("Python","img/py.png");
  if (nilai=="JavaScript"){
    document.getElementById("OutputSertifikat").innerHTML = `<div class="row"><img class="col-sm-3" src="img/Js.png" alt="${nilai}" width="100%"><img class="col-sm-3" src="img/Js2.png" alt="${nilai}" width="100%"><img class="col-sm-3" src="img/Js3.png" alt="${nilai}" width="100%"><img class="col-sm-3" src="img/JsA.png" alt="${nilai}" width="100%"></div>`;
    
  }
}
function OrderNow() {
  alert("Maaf menu belum berfungsi!!!.. \n hanya hiansan saja😂");
}
function waktu(){
  let from = new Date("19 September 2021");
  let to = new Date();
  if (from.getYear()<=to.getYear()){
    hasilTahun= to.getYear() - from.getYear();
    hasilTahun *=12;
    hasilBulan = to.getMonth()+1;
    hasil = hasilTahun-9 + hasilBulan;
    document.getElementById("Waktu").innerHTML = ` kurang lebih ${hasil} Bulan`;
  }
}