# Project CNPMNC

## Project name: Quiz App
## Using python version 3.9.0
#

## Members:

- ## Nguyễn Lê Anh Quốc - 4501104193
- ## Lê Chu Báu - 4501104017
- ## Trần Hoàng Khang - 4501104108

## Setup Postgres Database

- ## Install Postgres

```bash
$ winget install -e --id PostgreSQL.PostgreSQL
```

- ### User default: `postgres`
- ### Password default: `postgres`

* ## Create database

* ### Step 1: open SQL Shell (psql)
* ### Step 2: `$ create database quizz;`

## Setup Backend

- ### Step 1: `$ cd backend`
- ### Step 2: `$ pip install -r requirements.txt`
- ### Step 3: Follow link [backend\app\database\Database.py](backend\app\database\Database.py) to update user, password of your postgresql
- ### Step 4: `$ python main.py`
- ### Step 5: Follow link [http://localhost:8000/docs](http://localhost:8000/docs) to view API docs in your browser

#

## Setup Frontend

- ### Step 1: `$ npm i`
- ### Step 2: `$ npm start`
- ### Step 3: Follow link [http://localhost:3000](http://localhost:3000) to view it in your browser

#

## Demo

### Home page

![home](./demo/collections.jpeg)

### Test page

![test](./demo/quiz.jpeg)

### Result page

![result](./demo/result.jpeg)

### Create test page

![create-test](./demo/create-quiz.jpeg)
