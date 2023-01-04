const clientName = String(prompt('Введите имя клиента')).trim();
let clientSpendForAllTime = 0
clientSpendForAllTime = Number (clientSpendForAllTime)
let clientSpendToday = Number(prompt('Сколько клиент потратил сегодня?'))
let discont = 0
console.log('число ввода',clientSpendToday);
 clientSpendForAllTime = clientSpendForAllTime + Number(clientSpendToday)
 console.log('число',clientSpendForAllTime)

if (isNaN(clientSpendToday)){
  alert(`Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.`)
} else  {

  if (clientSpendForAllTime>=100 && clientSpendForAllTime<300){
    discont = '10%'
    clientSpendToday = clientSpendToday - (clientSpendToday*0.1)
    alert (`Вам предоставляется скидка в ${discont} `)
  } else if (clientSpendForAllTime>=300 && clientSpendForAllTime<500){
    discont = '20%'
    clientSpendToday = clientSpendToday - clientSpendToday*0.2
    alert (`Вам предоставляется скидка в ${discont} `)
  }else if (clientSpendForAllTime>500){
    discont = '30%'
    clientSpendToday = clientSpendToday - clientSpendToday*0.3
    alert (`Вам предоставляется скидка в ${discont} `)
  } else {alert (`Скидка Вам не полагается`)}
  
  alert(`Спасибо, ${clientName}! К оплате ${clientSpendToday}$. За все время в нашем ресторане вы потратили ${clientSpendForAllTime}$.`)
  
}







