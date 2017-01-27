.PHONY: help
.DEFAULT_GOAL := help

help:
	@grep -P '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# Initialization ==============================================================

install: ## Install npm dependencies
	@echo "Installing Node dependencies"
	yarn install

run:
	@echo "Start server"
	./node_modules/.bin/nodemon src/index.js
