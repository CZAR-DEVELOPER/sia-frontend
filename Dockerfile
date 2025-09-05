FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm","run","dev" ]

# how to run
# docker build -t sia-frontend .
# docker run -p 5173:5173 sia-frontend