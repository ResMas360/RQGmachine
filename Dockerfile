# build stage
FROM node:8-jessie AS builder
RUN npm i npm@latest -g
WORKDIR /var
COPY . /var
RUN npm install --no-optional && npm cache clean --force

#final stage
FROM node:alpine
COPY --from=builder /var .
EXPOSE 3000
CMD ["node", "app.js"]
