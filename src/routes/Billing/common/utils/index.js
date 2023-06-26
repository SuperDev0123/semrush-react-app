const getMonthName = (date) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return monthNames[date.getMonth()]
}

const getDayNumber = (date) => {
  let formattedDay = ''
  const day = date.getDate()
  if (day === 1) {
    formattedDay = '1st'
  } else if (day === 2) {
    formattedDay = '2nd'
  } else if (day === 3) {
    formattedDay = '3rd'
  } else {
    formattedDay = `${day}th`
  }

  return formattedDay
}

const getHours = (date) => {
  const hours = date.getHours()
  let formattedHour = ''
  if (hours < 10) {
    formattedHour = `0${hours}`
  } else {
    formattedHour = `${hours}`
  }

  return formattedHour
}

const getMinutes = (date) => {
  const minutes = date.getMinutes()
  let formattedMinutes = ''
  if (minutes < 10) {
    formattedMinutes = `0${minutes}`
  } else {
    formattedMinutes = `${minutes}`
  }

  return formattedMinutes
}

const formatDate = (date) => {
  const formattedDate = new Date(date * 1000)
  const formattedDateString = `${getMonthName(formattedDate)} ${getDayNumber(
    formattedDate
  )}, ${formattedDate.getFullYear(formattedDate)} ${getHours(
    formattedDate
  )}:${getMinutes(formattedDate)}`
  return formattedDateString
}

export { formatDate }
