default: build

clean:
	rm -rf build

build: clean node_modules
	mkdir build
	node build.js local

dev: clean node_modules
	mkdir build
	node build.js dev

prod: clean node_modules
	mkdir build
	node build.js prod

node_modules: package.json
	npm install

.PHONY: clean build
