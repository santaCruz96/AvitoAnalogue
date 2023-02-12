const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
]
  
function sellsFrom(date) {
    const userDate = new Date(date)
  
    const month = userDate.getMonth()
    const year = userDate.getFullYear()
  
    return `${months[month]} ${year}`
}

export default sellsFrom