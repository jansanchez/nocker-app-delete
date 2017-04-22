# **Nocker-App**

Super Simple Node.js App Template running over Docker

**Includes:**
- NodeJS with ES2015 (babel)
- Yarn (using cache)
- Docker
- Docker Compose
- ExpressJS


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

## How to run other tasks?
```
./docker/scripts/supply.sh deps yarn run start
```

## How to kill it?
```
docker-compose down
```
