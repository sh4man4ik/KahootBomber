FROM mcr.microsoft.com/playwright:v1.43.0-focal

WORKDIR /app

COPY src/package*.json ./

RUN npm install

COPY src ./

RUN npm install -g ts-node typescript

EXPOSE 5000

CMD ["ts-node", "server.ts"]