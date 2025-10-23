FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm","run","dev" , "--", "--host"]


# how to run
# docker build -t sia-frontend .
# docker run -d --name sia-front --restart unless-stopped -p 5173:5173 sia-frontend
