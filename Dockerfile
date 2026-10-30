FROM node:22-alpine

LABEL maintainer="CCSD <contact@episciences.org>"
LABEL description="Starlight build and dev environment for Episciences documentation"

WORKDIR /app

RUN apk update && apk add --no-cache git

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
