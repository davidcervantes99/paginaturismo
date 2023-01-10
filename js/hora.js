(function(){
    var actualizarhora = function(){
        var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

        var pHoras = document.getElementById('horas'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pAMPM = document.getElementById('ampm');

        if (horas >= 12 ){
             horas = horas - 12;
             ampm = 'PM';
        } else{
            ampm = 'AM';
        }

        if(horas == 0){
            horas = 12;
        };

    pHoras.textContent = horas;
    pAMPM.textContent = ampm;

    if ( minutos < 10) {minutos = "0" + minutos};
    if ( segundos < 10) {segundos = "0" + segundos};


    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;


    };
    actualizarhora();
    var intervalo = setInterval(actualizarhora,1000);

}())
