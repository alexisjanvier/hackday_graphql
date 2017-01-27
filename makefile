.PHONY: help deploy
.DEFAULT_GOAL := help

REACT_APP_API_URL ?= http://localhost:3000
CLIENT_URL ?= http://localhost:8080

help:
	@grep -P '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# Initialization ==============================================================

deploy: ## Install npm dependencies
	@echo "Deploying"
	cd client && npm run deploy
	cd api && npm run deploy
