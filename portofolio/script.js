function TampilkanSertifikat() {
  let nilai = document.getElementById("OptionKompetensi").value;
  function print(Value, url) {
    if (nilai == Value) {
      document.getElementById("OutputSertifikat").innerHTML = `
      <style>
        img.sertifikat{
          margin-bottom: 50px;
          border: 2px solid #00ffff;
          box-shadow: 3px 3px 3px #100fff;
        }
        @media (min-width: 1000px){
          img.sertifikat{
            width: 40%;
          }
        }
      </style>
      <img class="SizeImg  goncangan sertifikat" data-aos="fade-up" src="${url}" alt="${nilai}" width="80%">`;
    }
  }
  function prints(value, url, url2, url3) {
    if (nilai==value){
      document.getElementById("OutputSertifikat").innerHTML = `<style>
          img.sertifikat{
            margin: auto;
            margin-bottom: 50px;
            border: 2px solid #00ffff;
            box-shadow: 3px 3px 3px #100fff;
          }
          @media (min-width: 1000px){
            img.sertifikat{
              width: 40%;
              margin: auto;
            }
          }
        </style>
        <div style="display:flex;flex-wrap:wrap;">
          <img src="${url}" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
          <img src="${url2}" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
          <img src="${url3}" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
        </div>`;
    }
  }
  if (nilai=="BE"){
    document.getElementById("OutputSertifikat").innerHTML = `<style>
        img.sertifikat{
          margin: auto;
          margin-bottom: 50px;
          border: 2px solid #00ffff;
          box-shadow: 3px 3px 3px #100fff;
        }
        @media (min-width: 1000px){
          img.sertifikat{
              width: 40%;
              margin: auto;
            }
          }
        </style>
        <div style="display:flex;flex-wrap:wrap;">
          <img src="sertifikat/backEnd/BE.webp" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
          <img src="sertifikat/backEnd/BE2.webp" alt="${nilai}" width="80%" class="mb-5 fadeMuncul sertifikat">
        </div>`;
    }
  print("HTML","sertifikat/html/html.webp");
  print("CSS","sertifikat/css/css.webp");
  print("Python","sertifikat/py/py.webp");
  prints("JavaScript","sertifikat/js/js.webp", "sertifikat/js/js2.webp", "sertifikat/js/js3.webp")
  prints("aws","sertifikat/aws/aws.webp", "sertifikat/aws/aws2.webp", "sertifikat/aws/aws3.webp")
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
setInterval(function() {}, 10);