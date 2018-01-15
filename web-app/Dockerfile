FROM keymetrics/pm2

ADD . /src

ENV PATH /usr/local/bin:$PATH

WORKDIR /src

ENV PORT=80

EXPOSE 80

VOLUME /var/lib/node
VOLUME /root/.pm2

RUN npm install

CMD ["pm2-runtime", "process.yml"]