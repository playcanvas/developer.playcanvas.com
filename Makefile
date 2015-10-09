default: build

clean:
	rm -rf build

build: clean node_modules
	mkdir build
	node build.js local

dev: clean node_modules
	mkdir build
	node faq_to_json --dir content/en/faq --out editor_howdoi_dev.json --bucket code.playcanvas.com
	node faq --dir content/en/faq --out content/en/user-manual/faq.md
	node build.js dev

prod: clean node_modules
	mkdir build
	node faq_to_json --dir content/en/faq --out editor_howdoi.json --bucket code.playcanvas.com
	node faq --dir content/en/faq --out content/en/user-manual/faq.md
	node build.js prod

node_modules: package.json
	npm install

.PHONY: clean build
