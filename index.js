let dado1 = Math.floor(Math.random()*6)+1
let dado2 = Math.floor(Math.random()*6)+1




if (dado1 === 0 || dado2 === 0){
    let dado1 = Math.floor(Math.random()*6)
    let dado2 = Math.floor(Math.random()*6)
    
}


if (dado1 > dado2){

    document.querySelector('#Alterar').innerHTML = 'O jogador 1 venceu'
    document.querySelector('#Alterar').style.color = "white"
}
else{
        
    document.querySelector('#Alterar').innerHTML = 'O jogador 2 venceu'
    document.querySelector('#Alterar').style.color = "white"
}



const imagem1 = document.getElementsByClassName('img1')[0]
const imagem2 = document.getElementsByClassName('img2')[0]

imagem1.setAttribute('src','images/dice'+dado1+'.png')
imagem2.setAttribute('src','images/dice'+dado2+'.png')

console.log(imagem1)