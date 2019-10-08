FROM node:12

RUN apt update \
  && apt install -y \
  xsel

COPY . .

RUN npm i --no-cache
RUN npm run build-dev
RUN npm i -g serve

CMD ["serve", "-s", "build", "-l", "8080"]
