function bmi_cal(){
    var  mass , hieght , bmi ;
    mass  = Number(document.getElementById('wi').value);
    hieght = Number(document.getElementById('hi').value/100);
    bmi  = mass /  Math.pow(hieght , 2) ;
    alert(Math.floor(bmi*100)/100);
}