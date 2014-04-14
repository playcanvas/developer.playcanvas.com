default: build

clean:
	rm -rf build

build: clean node_modules
	mkdir build
	node build.js

node_modules: package.json
	npm install

.PHONY: clean build