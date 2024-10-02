require('dotenv').config()
const {API_KEY} = process.env

import {getCityGeoCodes} from './src/city'
import {getCityWeather, getCityWeatherHistory} from './src/weather'
import {
  storeWeatherRequest,
  storeWeatherResponse,
  storeWeatherHistoryRequest,
  storeWeatherHistoryResponse
}from './src/storage'


// Weather Lambda API
export async function weather(request, /*context*/) {
  const {pathParameters:{city}} = request

  const geocodes = await getCityGeoCodes({API_KEY,city})
  const {lat,lon} = geocodes[0]

  const weather = await getCityWeather({API_KEY,lat,lon})
  await Promise.all([
    storeWeatherRequest(request),
    storeWeatherResponse(weather),
  ])

  return {
    data: weather,
  }
}


// Weather History Lambda API
export async function weather_history(request, /*context*/) {
  const {pathParameters:{city}} = request

  const geocodes = await getCityGeoCodes({API_KEY,city})
  const {lat,lon} = geocodes[0]

  const weatherHistory = await getCityWeatherHistory({API_KEY,lat,lon})
  await storeWeatherHistoryResponse(weatherHistory)

  await Promise.all([
    storeWeatherHistoryRequest(request),
    storeWeatherHistoryResponse(weatherHistory),
  ])

  return {
    data: weatherHistory,
  }
}