all: build

build:
	cd dashboard/ && make build

clean:
	rm -rf dist/
	cd dashboard/ && make clean