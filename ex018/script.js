let num = window.document.querySelector('input#fnum');
let lista = window.document.querySelector('select#flista');
let res = window.document.querySelector('div#res');
let valores = [];

function isNumero(n){
    if(Number(n) < 1 || Number(n) > 100){
        return false;
    }else{
        return true;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = window.document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado!`;
        lista.appendChild(item);
    }else{
        window.alert('Valor inválido ou já encontrado na lista');
    }
    num.value = "";
    num.focus();
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de terminar!');
    }else{
        res.innerHTML = ``;
        
        let tot = valores.length, maior, menor, soma = 0, media = 0;
        
        maior = menor = valores[0];
        for (let pos in valores){
            soma += valores[pos];
            if (maior < valores[pos]){
                maior = valores[pos];
            }
            if (menor > valores[pos]){
                menor = valores[pos];
            }
        }
        media = (soma/tot);
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}