# Используем официальный образ Node.js
FROM node:14

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем файлы package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Экспонируем порт 3000, который используется в вашем приложении
EXPOSE 3330

# Команда для запуска вашего приложения
CMD ["npm", "start"]