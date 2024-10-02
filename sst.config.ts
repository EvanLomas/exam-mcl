/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  // Initialise SST
  app(input) {
    return {
      name: "exam-mcl",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    // Scaffold City Weather API Endpoint and Storage Bucket
    const apiCityWeather = new sst.aws.ApiGatewayV2('exam-mlc-city-weather');
    apiCityWeather.route("GET /weather/{city}", {
      handler: "index.weather"
    })
    const apiCityWeatherBucket = new sst.aws.Bucket("exam-mlc-city-weather-bucket");

    // Scaffold City Weather History API Endpoint and Storage Bucket
    const apiCityWeatherHistory = new sst.aws.ApiGatewayV2('exam-mlc-city-weather-history');
    apiCityWeatherHistory.route("GET /weather/history/{city}", {
      handler: "index.weather_history"
    })
    const apiCityWeatherHistoryBucket = new sst.aws.Bucket("exam-mlc-city-weather-history-bucket");
  },
});
