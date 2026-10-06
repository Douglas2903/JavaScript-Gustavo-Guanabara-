function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var agora = new Date();
    var horas = agora.getHours().toString().padStart(2, "0");
    var minutos = agora.getMinutes().toString().padStart(2, "0");
    var segundos = agora.getSeconds().toString().padStart(2, "0");
    if(horas >= 6 && horas < 12){
        msg.innerText = `Bom dia! Agora são ${horas}:${minutos}:${segundos}`;
        img.src = 'fotodamanha.jpg';
    }else if (horas >= 12 && horas < 18){
        msg.innerText = `Boa tarde! Agora são ${horas}:${minutos}:${segundos}`;
        img.src = 'fotodatarde.jpg';
    }else{
        msg.innerText = `Boa noite! Agora são ${horas}:${minutos}:${segundos}`;
        img.src = 'fotodanoite.jpg';
    }
}