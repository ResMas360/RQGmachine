FROM node:8-jessie

EXPOSE 3000

RUN npm i npm@latest -g

WORKDIR /var

COPY . /var

RUN npm install --no-optional && npm cache clean --force

CMD ["node", "app.js"]
