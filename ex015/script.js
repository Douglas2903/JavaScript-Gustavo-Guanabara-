function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fnao = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');
    if(fnao.value.length == 0 || fnao.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!');
    }else{
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fnao.value);
        var genero = "";
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-m.jpg');
            }else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-m.jpg');
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-m.jpg');
            }else{
                img.setAttribute('src', 'foto-idoso-m.jpg');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-f.jpg');
            }else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-f.jpg');
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-f.jpg');
            }else{
                img.setAttribute('src', 'foto-idoso-f.jpg');
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}