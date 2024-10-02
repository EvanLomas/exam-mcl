import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Weather, type WeatherHistory } from "./weather";
const client = new S3Client({});

export async function storeWeatherRequest(request) {
  const command = new PutObjectCommand({
    Bucket: 'exam-mlc-city-weather-bucket',
    Key: `${Date.now()}-weather-request.json`,
    Body: JSON.stringify(request),
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

export async function storeWeatherResponse(weather:Weather) {
  const command = new PutObjectCommand({
    Bucket: 'exam-mlc-city-weather-bucket',
    Key: `${Date.now()}-weather-response.json`,
    Body: JSON.stringify(weather),
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

export async function storeWeatherHistoryRequest(request) {
  const command = new PutObjectCommand({
    Bucket: 'exam-mlc-city-weather-history-bucket',
    Key: `${Date.now()}-weather-history-request.json`,
    Body: JSON.stringify(request),
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

export async function storeWeatherHistoryResponse(weatherHistory:WeatherHistory) {
  const command = new PutObjectCommand({
    Bucket: 'exam-mlc-city-weather-bucket',
    Key: `${Date.now()}-weather-history-response.json`,
    Body: JSON.stringify(weatherHistory),
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}