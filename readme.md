# Exercise Tracker

[femto-exercise-tracker](https://femto-exercise-tracker.glitch.me/) is a simple full stack app that keeps tracks of exercise logs of different users. This project idea was gotten from [freeCodeCamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker).

---

### Resources

- Create a user <https://femto-exercise-tracker.glitch.me/api/users>
- Get all users <https://femto-exercise-tracker.glitch.me/api/users>
- Create a new exercise log <https://femto-exercise-tracker.glitch.me/api/users/:_id/exercises>
- Get a user's exercise logs <https://femto-exercise-tracker.glitch.me/api/users/:_id/log>

#### Create a user

A post request to <https://femto-exercise-tracker.glitch.me/api/users> is made with the request body containing the user name of the user to be created. If the request is successful, a new user is created on the database and a 201 status code is returned with a json object containing the user name and id of the created user. If the user already exists in the database, a 200 status code is returned with a json object containing the user name and id of the user. If the username is absent from the request body, a 400 error is returned.

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

A get request to <https://femto-exercise-tracker.glitch.me/api/users> is made. If the request is successful, a 200 status code is returned with a json object containing all the users on the database. Else, a 400 error is returned.

##### Sample return

- If request is successful

```js
{
  "users": [
    {
      "_id": "sample user 1 id",
      "username": "sample user 1"
    },
    {
     "_id": "sample user 2 id",
     "username": "sample user 2"
    },
    {
     "_id": "sample user 3 id",
     "username": "sample user 3"
    }
  ]
}
```

#### Create a new exercise

A post request to <https://femto-exercise-tracker.glitch.me/api/users/:_id/exercises> is made where :\_id is the id of the user creating the exercise. The request body contains the id of the user, the description of the exercise, the exercise duration and date. if no date is supplied, the current data is used. The id, description and duration must be present else a 400 error is returned.

##### Sample return

- When the request is successful

```js
{
  "userLogs": {
    "username": "sample user 1",
    "_id": "sample user 1 id",
    "count": 2,
    "log": [
             {
                "description": "sample exercise",
                "duration": 60,
                "date": "2018-11-08T23:00:00.000Z"
             },
             {
                "description": "kirin",
                "duration": 60,
                "date": "2020-11-08T23:00:00.000Z"
             }
           ]
    }
}
// Count represents the number of exercise logs a user has
```

#### Get a user's exercise logs

A get request to <https://femto-exercise-tracker.glitch.me/api/users/:_id/log?from=YYYY-MM-DD&to=YYYY-MM-DD&limit=integer> is made. The form and to query fields are used to filter the exercise logs of user with id :\_id. If the from query field is absent, it is given a default value of 0. If the to query field is absent, it is given a default value of a day after the current date. The limit query field represents the number of logs that are returned. If it is absent all logs belonging to the user are returned.

##### Sample return

```js
{
  "result": {
        "_id": "sample user id",
        "username": "sample user",
        "count": 5,
        "log": [
            {
                "description": "sample exercise 1",
                "duration": 60,
                "date": "2018-11-08T23:00:00.000Z"
            },
            {
                "description": "sample exercise 2",
                "duration": 60,
                "date": "2020-11-08T23:00:00.000Z"
            },
            {
                "description": "sample exercise 3",
                "duration": 60,
                "date": "2019-11-08T23:00:00.000Z"
            },
            {
                "description": "sample exercise 4",
                "duration": 60,
                "date": "2021-11-08T23:00:00.000Z"
            },
            {
                "description": "sample exercise 5",
                "duration": 60,
                "date": "2017-11-08T23:00:00.000Z"
            }
        ]
    }
}
```

### Feedback!!

I'd love your feedback on the API. You can reach me via [email](mailto:chinaemerema@gmail.com) or give me a shout out on [twitter](https://twitter.com/femto_ace?t=nk6ylNm1Zp2l0yiJkCKFeA&s=09)
