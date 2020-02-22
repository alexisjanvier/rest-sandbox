.PHONY: install openapi

export UID = $(shell id -u)
export GID = $(shell id -g)

export NODE_ENV ?= development

DOCKER := docker run --rm -v ${PWD}:/app -u=${UID} -w /app  node:13-alpine
DOCKER_API := docker run --rm -v ${PWD}:/app -u=${UID} -w /app/api  node:13-alpine
DOCKER_OPENAPI := docker run --rm -v ${PWD}:/app -u=${UID} -w /app/openapi  node:13-alpine
DOCKER_WEBAPP := docker run --rm -v ${PWD}:/app -u=${UID} -w /app/webapp  node:13-alpine

help: ## Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install all deps
	@${DOCKER} npm install
	@echo "Avec de l'open-source dedans ! Soutenons les 😉"
	@${DOCKER} npm fund
	@${DOCKE_API} npm install
	@echo "Avec de l'open-source dedans ! Soutenons les 😉"
	@${DOCKER_API} npm fund
	@${DOCKER_OPENAPI} npm install
	@echo "Avec de l'open-source dedans ! Soutenons les 😉"
	@${DOCKER_OPENAPI} npm fund
	@${DOCKER_WEBAPP} npm install
	@echo "Avec de l'open-source dedans ! Soutenons les 😉"
	@${DOCKER_WEBAPP} npm fund

# =====================================================================
# OpenAPI =============================================================
# =====================================================================

openapi: openapi-bundle openapi-validate ## Bundle then validate the OpenAPI schema

openapi-bundle: ## Bundle the OpenAPI schema
	@${DOCKER_OPENAPI} npm run openapi:bundle

openapi-validate: ## Validate the OpenAPI schema
	@${DOCKER_OPENAPI} npm run openapi:check

start-tooling: ## Start tooling containers, including documentation
	@docker-compose up -d
stop-tooling: ## Stop toolings containers
	@docker-compose down

# ===================================================================
# Tests =============================================================
# ===================================================================

connect-api: ## Connect to express api container (useful for debugging)
	@docker-compose exec api ash

test-api: ## Start test on express API witg Dredd
	@${DOCKER_API} npm run test

# =====================================================================
# SDK generator =======================================================
# =====================================================================

generate-hook: ## Generate hook for react against the OpenAPI schema
	@${DOCKER_WEBAPP} npm run generate-fetcher
