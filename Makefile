.PHONY: install openapi

export UID = $(shell id -u)
export GID = $(shell id -g)

export NODE_ENV ?= development

DOCKER := docker run --rm -v ${PWD}:/app -u=${UID} -w /app  node:13-alpine

help: ## Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install all deps
	@${DOCKER} npm install
	@echo "Avec de l'open-source dedans ! Soutenons les 😉"
	@${DOCKER} npm fund

# =====================================================================
# OpenAPI =============================================================
# =====================================================================

openapi: openapi-bundle openapi-validate ## Bundle then validate the OpenAPI schema

openapi-bundle: ## Bundle the OpenAPI schema
	@${DOCKER} npm run openapi:bundle

openapi-validate: ## Validate the OpenAPI schema
	@${DOCKER} npm run openapi:check

start-documentation: ## Start documentation server in container
	@docker-compose up -d
stop-documentation: ## Stop documentation server in container
	@docker-compose down
