const weatherForecast = {
    "Понеділок": 18,
    "Вівторок": 19,
    "Середа": 20,
    "Четвер": 21,
    "Пʼятниця": 22,
    "Субота": 23,
    "Неділя": 24
};
const maxTemperature = Math.max(...Object.values(weatherForecast));
const minTemperature = Math.min(...Object.values(weatherForecast));
const temperatures = Object.values(weatherForecast);
const averageTemperature = temperatures.reduce((acc, curr) => acc + curr, 0) / temperatures.length;
       weatherForecast.toString = function() {
       const daysOfWeek = Object.keys(this).join(" • ");
       return (daysOfWeek);
            };
        weatherForecast.valueOf = function() {
        return averageTemperature;
                   };
console.log(weatherForecast); 
console.log("Сєрєдня температура:", averageTemperature);
console.log("Максимальна температура:", maxTemperature);
console.log("Мінімальна температура:", minTemperature);
