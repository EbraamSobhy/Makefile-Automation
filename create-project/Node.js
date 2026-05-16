# Variables
APP_NAME ?= my - node - app
ENTRY ?= index.js

# Default target
all: init

# Create a new Node.js project
init:
mkdir - p $(APP_NAME)
	cd $(APP_NAME) && npm init - y
	cd $(APP_NAME) && touch $(ENTRY)
@echo "Node.js project '$(APP_NAME)' created."

# Install dependencies(usage: make install PKG = express)
install:
	cd $(APP_NAME) && npm install $(PKG)

# Install dev dependencies(usage: make install - dev PKG = nodemon)
install - dev:
	cd $(APP_NAME) && npm install--save - dev $(PKG)

# Run the app
run:
	cd $(APP_NAME) && node $(ENTRY)

# Start with nodemon(if installed)
    dev:
	cd $(APP_NAME) && npx nodemon $(ENTRY)

# Clean project(remove node_modules)
clean:
rm - rf $(APP_NAME) / node_modules

# Full reset
reset: clean
	cd $(APP_NAME) && npm install

    .PHONY: all init install install - dev run dev clean reset
