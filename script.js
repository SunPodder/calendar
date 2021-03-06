const container = document.querySelector("#calendar"),
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var currentMonth = new Date().getMonth() + 1,
  currentYear = new Date().getYear() + 1900,
  monthCon = document.querySelector("#month"),
  yearCon = document.querySelector("#year")
const todayDate = new Date().getDate(),
  todayMonth = new Date().getMonth(),
  todayYear = new Date().getYear() + 1900

function createCalendar(elem, year, month){
  let mon = month - 1
  let d = new Date(year, mon)
  let table = "<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>"
  
  for(let i = 0;i < getDay(d);i++){
    table += "<td></td>"
  }
  while(d.getMonth() == mon){
    let date = d.getDate()
    if(date == todayDate && mon == todayMonth && todayYear == currentYear){
      table += `<td class="jade-border">${date}</td>`
    }else{
      table += `<td>${date}</td>`
    }
    if(getDay(d) % 7 == 6){
      table += "</tr><tr>"
    }
    d.setDate(d.getDate() + 1)
  }
  
  if(getDay(d) != 0){
    for(let i = getDay(d);i < 7;i++){
      table += "<td></td>"
    }
  }
  table += "</tr></table>"
  elem.innerHTML = table
}

function getDay(date){
  let day = date.getDay()
  if(day == 0) day = 7
  return day - 1
}

function nextMonth(){
  if(currentMonth == 12){
    currentYear += 1
    currentMonth = 1
  }else{
    currentMonth += 1
  }
  render()
}

function prevMonth(){
  if(currentMonth == 1){
    currentYear -= 1
    currentMonth = 12
  }else{
    currentMonth -= 1
  }
  render()
}

function updateWithInput(){
  currentYear = +(yearCon.innerHTML)
  let m = monthCon.innerHTML
  m.trim()
  months.forEach(month => {
    if(m == month){
      currentMonth = months.indexOf(month) + 1
    }
  })
  render()
}

function render(){
  createCalendar(container, currentYear, currentMonth)
  monthCon.innerHTML = months[currentMonth - 1]
  yearCon.innerHTML = currentYear
}
render()
