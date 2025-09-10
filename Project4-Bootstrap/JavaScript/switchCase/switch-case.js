// Kideme gore alinacak promosyon miktarini gosteren programi switch-case ile olusturalim

let title = prompt("Lutfen bir kidem giriniz:")

let promosyon;
switch(title) {
  case 'prof':
    promosyon='1000$';
    break;
  case'senior':
    promosyon='700$';
    break;
  case 'junior':
    promosyon='300$';
    break;
  
    default:{
      console.log("Yanlis bir title girdiniz")
    }
}