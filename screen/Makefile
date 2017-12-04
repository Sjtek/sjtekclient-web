all: build

build:
	npm install && npm run build && mkdir -p ../dist/screen && cp -r ./dist/* ../dist/screen/

clean:
	rm -rf dist/ node_modules/