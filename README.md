# Keksik VK API

Готовый Node.js класс для работы с Keksik VK API.
Документация API - https://keksik.io/api

### Пример использования класса

```js
const KeksikVKApi = require("keksik-vk-api");

const keksik = new KeksikVKApi(
	179267503, // VK ID сообщества
	"тут_подставить_токен" // Токен можно получить в панели управления приложенияем, во вкладке "API"
);

(async () => {
	const result = await keksik.balance();

	console.log(result);
})();
```
