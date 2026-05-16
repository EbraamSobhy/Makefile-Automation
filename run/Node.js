APP_NAME=my-node-app

install:
	npm install

start:
	npm start

dev:
	npm run dev

build:
	npm run build

test:
	npm test

lint:
	npm run lint

clean:
	rm -rf node_modules dist

reinstall: clean install

.PHONY: install start dev build test lint clean reinstall
