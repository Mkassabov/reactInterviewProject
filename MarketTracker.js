const key = 'V35R1AKL6VO1F3SP';

export default function getCurrentPrice(ticker) {
  let day = new Date()
  if(day.getDay() === 0) {day.setDate(day.getDate()-2)}
  if(day.getDay() === 6) {day.setDate(day.getDate()-1)}
  const date = day.toISOString().split('T')[0]

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${key}`;
  return fetch(url)
    .then(res => res.json())
    .then(json => {
      if (json.hasOwnProperty("Time Series (Daily)")) {
        // alphavantage results
        return {
          open: json["Time Series (Daily)"][date]["1. open"],
          close: json["Time Series (Daily)"][date]["4. close"]
        }
      } else {
        // fallback since alphavantage free is limited to 5 requests per minute
        return { open: Math.random() * (200), close: Math.random() * (200) }
      }
    })
}