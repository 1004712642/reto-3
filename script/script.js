


let btncalcular = document.getElementById("btncalcular");
let kg = document.getElementById("kg");
let m = document.getElementById("m");
let imc = document.getElementById("imc");
let lectura = document.getElementById("lectura");

btncalcular.onclick = function() {
    if (kg.value!="" && m.value!="") {
        imcx = (kg.value / (m.value * m.value));
        imc.innerhtml = imcx;
        console.log(imcx);

        if (imcx<=18.4) {
            lectura.innerHTML = "bajo peso";
            document.getElementById("18.4om");
        }
        else if (imcx>= 18.4 && imcx <=24.9) {
            lectura.innerHTML = "saludable";
            document.getElementById("saludable2");
            //console.log(imc);
        }
        else if (imcx>=25.0 && imcx <=29.9) {
            lectura.innerHTML = "exceso de peso";
            document.getElementById("excesop");
        }
        else if (imcx>=30.0) {
            lectura.innerHTML = "obeso";
            document.getElementById("obeso1");
        }
        else{
            alert("error de datos");
        }
    }
}
alert("hola usuario ingresa tu imc");





  //calcular.addEventListener("click",e => {
   //////    imcx= (kg.value / (m.value * m.value));
  //      imc.innerhtml =imcx;
  //      console.log(imcx);
   // }

//});




