FROM novemberde/node-pm2

ADD . /src

WORKDIR /src

EXPOSE 3000

RUN npm install
# RUN npm test

CMD ['pm2-docker', 'bin/www'];