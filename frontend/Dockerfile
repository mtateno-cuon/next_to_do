FROM node:20.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000 4010

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]