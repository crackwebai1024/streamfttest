# ANONYMOUS QUESTION APP - BACKEND

## 1. INTRODUCTION

This is the back-end repo for the `Anonymous Question App`. With the current version, the end-users can do the following things:

- Sign-in
- Add new questions.
- View the list of questions.
- Clear all questions.

## 2. HOW TO RUN THIS REPO

- **Step 1:** We need to clone this repo from [here](https://github.com/hlestreamft/anonymous-question-app).
- **Step 2:** cd to the `server` folder.
- **Step 3:** Run `npm install`.
- **Step 4:** Run `node index.js`.

> To know how to run the front-end repo, we can refer to this [link](https://github.com/hlestreamft/anonymous-question-app/client)

## 3. LIST OF APIS

### 3.1. SIGN IN

```js
method: POST

API endpoint: /sign-in

Sample Request payload:

{
  "username": "test@streamft.com",
  "password": "test@123456"
}

Sample Response:

{
  "token": "this-is-a-random-token"
}
```

### 3.2. ADD NEW QUESTIONS

```js
method: POST

API endpoint: /questions

Sample Request payload:

{
  "question": "type_your_question_here"
}

Sample Response:

{
  "message": "success"
}
```

### 3.3. GET ALL QUESTIONS

```js
method: GET

API endpoint: /questions

Sample Response:

[
  {
    "createdAt": "2023-04-21T06:20:09.373Z",
    "id": "8d74c502-827f-4957-ac0f-0ffc61a189d6",
    "question": "How to learn React?"
  }
]
```

### 3.4. CLEAR ALL QUESTIONS

```js
method: DELETE

API endpoint: /questions

Sample Response:

{
  "message": "success"
}
```
