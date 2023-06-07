# About

This is my answer to Surplus Indonesia Technical Assessment [API](https://jsonplaceholder.typicode.com/posts)

## Description

The tests are consisted by 15 basic test cases to assert returns from [API](https://jsonplaceholder.typicode.com/posts) that Surplus Indonesia has provided.

## Requirements
1. NodeJS
2. NPM
3. Cypress
4. [Cy-api](https://github.com/bahmutov/cy-api)

## Installation

Clone the Repository to save on your local.

```bash
git clone https://github.com/gwanen/surplusIndonesiaTechnicalAPI
```

Install Cypress
```bash
npm install cypress --save-dev
```

Install Cy-api
```bash
npm install --save-dev @bahmutov/cy-api
```

## Run on Local
Start npm first
```bash
npm start
```

Open Cypress
```bash
npx cypress open 
```

Then navigate to E2E and open **surplusTechnicalTest.cy**


## Run on Git Action
You can run this tests using [Git Action](https://github.com/gwanen/surplusIndonesiaTechnicalAPI/actions)
