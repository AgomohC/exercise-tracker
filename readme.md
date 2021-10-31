# Exercise Tracker

[femto-exercise-tracker]() is a simple full stack app that keeps tracks of exercise logs of different users. This project idea was gotten from [freeCodeCamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker).

---

### Resources

- Create a user <#/api/users>
- Get all users <>
- Create a new exercise log <>
- Get a user's exercise logs <>

#### Create a user

A post request is made with the request body containing the user name of the user to be created. If the request is successful, a new user is created on the database and a 201 status code is returned with a json object containing the user name and id of the created user. If the user already exists in the database, a 200 status code is returned with a json object containing the user name and id of the user. If the username is absent from the request body, a 400 error is returned.

##### Sample return

- If username is present in the request body

```js
{
    "username": "sample user",
    "_id": "sample user id"
}
```

- If username is a falsy value

```js
{
    "error": "no username provided"
}
```

#### Get all users
