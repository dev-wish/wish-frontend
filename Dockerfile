FROM node:20.5.1-alpine

WORKDIR /app

ENV NODE_ENV=development

COPY adventure_allies .

RUN npm i

CMD npm run dev

EXPOSE 3000