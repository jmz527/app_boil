FROM node:12.14.1-alpine

RUN npm i -g npm@8.5.0

EXPOSE 80 80

RUN mkdir -p ./frontend

WORKDIR /frontend

COPY /package.json /package-lock.json* ./

RUN apk add python3==3.8.10-r0
RUN apk add --no-cache --virtual .deps make==4.2.1-r2 \
        g++==9.3.0-r0 \
    && npm ci \
    && npm cache clean --force \
    && apk del .deps

COPY . .

RUN npm run build-dev

CMD ["python3", "-m", "http.server", "80", "--directory", "./build"]
