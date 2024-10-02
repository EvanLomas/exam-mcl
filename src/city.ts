export type GeoCode = {
  name: String
  local_names: Object
  lat: Number
  lon: Number
  country: String
  state: String
}

export async function getCityGeoCodes ({API_KEY,city,country='AUS'}:{API_KEY:String,city:String,country?:String}) : Promise<GeoCode> {
  const geocodes = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => { return res as [GeoCode]})
    .catch(res => {
      // NOTE: before throwing an error, sending the error result to an external error handling service would be ideal
      throw new Error(res)
    })
  if(!geocodes.length) {
    throw new Error(`City "${city}" could not be found.`)
  }
  return geocodes[0]
}