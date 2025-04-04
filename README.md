### rentrate-client/README.md (Frontend)

# RentRate — Frontend

RentRate — це користувацький інтерфейс для платформи оренди квартир.

## 🚀 Технології

- React
- React Router
- Tailwind CSS + DaisyUI
- Axios

## 🔍 Структура

- `pages/` — сторінки (Login, Browse, Details, Review)
- `components/` — компоненти (Navbar, Card, Filters)
- `api/api.js` — налаштування Axios
- `AppRouter.jsx` — маршрутизація

## ⚙️ Запуск проєкту

1. Встановити залежності:

```
npm install
```

2. Запустити проєкт:

```
npm start
```

## 🔹 Можливості

- Авторизація / реєстрація
- Перегляд квартир з фільтрами та сортуванням
- Додавання, редагування, видалення квартир (орендодавці)
- Відгуки від орендарів (зірки, коментар)
- AJAX-оновлення кожні 5 сек через `setInterval`
