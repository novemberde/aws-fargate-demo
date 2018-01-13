FROM novemberde/node-pm2

ADD . /src

WORKDIR /src

RUN npm install
RUN npm test

CMD ['pm2-docker', 'bin/www'];