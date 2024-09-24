var agora = new Date()
var diaSem = agora.getDay()
/*
0 = Dom
1 = Seg
2 = Ter
3 = Qua
4 = Qui
5 = Sex
6 = Sab
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Dom')
        break
    case 1:
        console.log('Seg')
        break
    case 2:
        console.log('Ter')
        break
    case 3:
        console.log('Qua')
        break
    case 4:
        console.log('Qui')
        break
    case 5:
        console.log('Sex')
        break
    case 6:
        console.log('Sab')
        break
    default:
        console.log('[ERRO] Dia Inválido!')

}