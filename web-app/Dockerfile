FROM keymetrics/pm2

ADD . /src

WORKDIR /src

ENV PORT=80

EXPOSE 80

RUN npm install
# RUN npm test

CMD ["pm2-runtime", "process.yml"]