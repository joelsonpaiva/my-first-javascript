function Load() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var data = new Date();
    var hour = data.getHours();
    msg.innerHTML = 'Agora são ${hour} horas.';
    
    if (hour >=0 && hour<12 ){
        //bom dia
        img.src = 'img/manha.png';
        document.body.style.background = '#e2cd9f';
        msg.innerHTML = 'Good morning is ' + hour + ' am.';
    } else if (hour>= 12 && hour <18){
        //boa tarde
        img.src = 'img/tarde.png';
        document.body.style.background = '#b9846f';
        msg.innerHTML = 'Good afternoon is ' + hour + ' pm.';
    } else if (hour >=18 && hour <21) {
        //boa noite
        img.src = 'img/noite.png';
        document.body.style.background = '#515154';
        msg.innerHTML = 'Good evening is ' + hour + ' hours.';
    } else {
        img.src = 'img/noite.png';
        document.body.style.background = '#515154';
        msg.innerHTML = 'Good night is ' + hour + ' hours.';

    }
}
