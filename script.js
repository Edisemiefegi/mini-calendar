const date = document.getElementById('date')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('yea')


const today = new Date();
const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const allmonth = ['jan', 'feb', 'mar', 'apri', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']


if(today.getDate() < 10){
    date.innerHTML = '0' + today.getDate();
}else{
    date.innerHTML = today.getDate();
}
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allmonth[today.getMonth()]
year.innerHTML = today.getFullYear();


