FROM node:alpine
WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]
