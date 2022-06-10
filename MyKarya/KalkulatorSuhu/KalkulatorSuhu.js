function Konversi() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var nilai = document.getElementById("nilai1").value;
  nilai = Number(nilai);
  if(from==to){
    document.getElementById("demo").innerHTML = `${nilai}° ${to}`;
  }
  else if(from=="Celcius" && to=="Reamur"){
    document.getElementById("demo").innerHTML = `${nilai*4/5}° ${to}`;
  }
  else if(from=="Celcius" && to=="Kelvin"){
    document.getElementById("demo").innerHTML = `${nilai+273}° ${to}`;
  }
  else if(from=="Celcius" && to=="Fahrenheit"){
    document.getElementById("demo").innerHTML = `${nilai*9/5+32}° ${to}`;
  }
  else if(from=="Kelvin" && to=="Celcius"){
    document.getElementById("demo").innerHTML = `${nilai-273}° Celcius`;
  }
  else if(from=="Kelvin" && to=="Reamur"){
    document.getElementById("demo").innerHTML = `${(nilai-273)*4/5}° ${to}`;
  }
  else if(from=="Kelvin" && to=="Fahrenheit"){
    document.getElementById("demo").innerHTML = `${(nilai-273)*9/5+32}° ${to}`;
  }
  else if(from=="Reamur" && to=="Fahrenheit"){
    document.getElementById("demo").innerHTML = `${nilai*9/4+32}° ${to}`;
  }
  else if(from=="Reamur" && to=="Celcius"){
    document.getElementById("demo").innerHTML = `${nilai*5/4}° ${to}`;
  }
  else if(from=="Reamur" && to=="Kelvin"){
    document.getElementById("demo").innerHTML = `${nilai*5/4+273}° ${to}`;
  }
  else if(from=="Fahrenheit" && to=="Reamur"){
    document.getElementById("demo").innerHTML = `${(nilai-32)*4/9}° ${to}`;
  }
  else if(from=="Fahrenheit" && to=="Celcius"){
    document.getElementById("demo").innerHTML = `${(nilai-32)*5/9}° ${to}`;
  }
  else if(from=="Fahrenheit" && to=="Kelvin"){
    document.getElementById("demo").innerHTML = `${(nilai-32)*5/9+273}° ${to}`;
  }
}