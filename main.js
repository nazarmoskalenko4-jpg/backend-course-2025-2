// main.js — Частина III (варіант 6)
const date = "20231001";
const time_period = "q";

const base = "https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank";
const url = new URL(base);

// Додаємо параметри до URL
url.searchParams.append("date", date);
url.searchParams.append("period", time_period);

// Додаємо прапорець json (без "=")
url.search = url.search + "&json";

console.log(url.toString());