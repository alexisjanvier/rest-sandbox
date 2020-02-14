.PHONY: install openapi

help: ## Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install all deps
	@npm install
	@echo "Avec de l'open-source dedans ! Soutenons les 😉"
	@npm fund

# =====================================================================
# OpenAPI =============================================================
# =====================================================================

openapi: openapi-bundle openapi-validate ## Bundle then validate the OpenAPI schema

openapi-bundle: ## Bundle the OpenAPI schema
	@npm run openapi:bundle

openapi-validate: ## Validate the OpenAPI schema
	@npm run openapi:check

openapi-documentation: ## Start documentation server
	@npm run openapi:serve
