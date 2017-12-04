all: build

build:
	cd dashboard/ && make build
	cd screen/ && make build

clean:
	rm -rf dist/
	cd dashboard/ && make clean
	cd screen/ && make clean