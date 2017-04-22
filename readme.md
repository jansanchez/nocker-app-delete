# **Nocker**

Super Simple Node.js Web App Template build with Docker

**Includes:**
- NodeJS
- Yarn (cache)
- NodeJS with ES2015 (babel)
- Docker
- Docker Compose


## How to use?
```
./docker/scripts/setup.sh && docker-compose up
```

So, open the browser....

## Localhost
[http://localhost:3001](http://localhost:3001)

## **Other commands**

## Setup (build + supply)
```
./docker/scripts/setup.sh
```

## Only Build
```
./docker/scripts/build.sh
```

## Only Supply
```
./docker/scripts/supply.sh
```

## How to add other dependencies?
```
./docker/scripts/supply.sh deps yarn add css-url-versioner
```

## How to kill it?
```
docker-compose down
```
