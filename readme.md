# Nocker

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

## Add dependencies
```
./docker/scripts/supply.sh deps yarn add css-url-versioner
```

## How to use?
```
./docker/scripts/setup.sh && docker-compose up
```

At last, open the browser

## Localhost
[http://localhost:3001](http://localhost:3001)


## How to kill it?
```
docker-compose down
```
