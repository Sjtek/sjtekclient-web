all: build

build:
	npm install && npm run build && mkdir -p ../dist && cp -r ./dist/* ../dist/

clean:
	rm -rf dist/ node_modules/