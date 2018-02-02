install:
	npm install

start:
	rm -rf dist public
	npm run start

lint:
	npm run eslint src/**/*.js

test:
	npm test
