FROM node

COPY . /app
WORKDIR /app
RUN npm i
EXPOSE 9001
CMD node ./index.js