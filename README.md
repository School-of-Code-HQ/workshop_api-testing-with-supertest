# Purpose

Become familiar with API testing. We happen to be using Jest and Supertest, but if you understand the key concepts, you can apply the same principles with any testing library.

# Task 1

1. Complete the tests written in `index.test.js`.

# Task 2

Briefly familiarise yourself with the contents and structure of the `task-2` folder. It's not an API or Express app that you've written, but there also shouldn't be anything new or unfamiliar in there.

1. Add a test (in `routes/users.test.js`) which checks whether sending a `GET /users` request (using Supertest) gives us back a response containing:

   - HTTP status 200
   - A response body that has the following structure:

   ```ts
   {
     "success": true,
     "payload": [
       { "id": number, "username": string },
       { "id": number, "username": string }
       // ... and so forth for any other users.
     ]
   }
   ```

   (Remember to use the skills you've picked up in task 1. If you're stuck, look at the docs for both Jest and Supertest.)

2. Add a test (in `routes/users.test.js`) which checks whether sending a `GET /users/:id` request (using Supertest) for an existing ID gives us back a response containing:

   - HTTP status 200
   - A response body that has the following structure:

   ```ts
   {
       "success": true,
       "payload": { "id": number, "username": string }
   }
   ```

3. Add a test (in `routes/users.test.js`) which checks whether sending a `GET /users/:id` request (using Supertest) for a non-existing ID gives us back a response containing:

   - HTTP status 404
   - A response body that has the following structure:

   ```ts
   {
       "success": false,
       "reason": "No user with ID <REQUESTED_ID> was found."
   }
   ```

   _See if you can store the non-existing ID in a variable so that you can then refer to the variable throughout your test._

# Task 3

## Setup

1. Create a `.env` file (using `.env.example` to see which variables need to be filled out).
2. `cd` into `task-3` folder, install dependencies, then run the `db-reset` script (see `package.json` for details).

**Just a heads-up:** we will be repeatedly creating and dropping a `users` table in this task. So, if your database happens to already contain a `users` table that you don't want to lose it, create a fresh, separate database and provide its name via `PGDATABASE` environment variable.

## Tests

Create a `users.test.js` file (within `routes` folder).

1. For each of these requests:

- `GET /users`
- `GET /users?username=<some_username>`
- `GET /users/:id`

Complete the following:

- Look at that route's request handler (in `routes/users.js`) and discuss how many scenarios need to be tested. Usually, the more conditions (e.g. the more IF statements) the handler contains, the more scenarios you need to test.
- Write a test (in `routes/users.test.js`) for each scenario.
- Assert whether all the expected information (e.g. HTTP status code, response's body's structure) is present within the response.

2. Before writing tests for the routes below, have a look at https://jestjs.io/docs/setup-teardown to see how Jest might give us an opportunity to get ourselves a fresh `users` table for each test (note: the function exported in `db/scripts/reset-table.js` might be useful). The benefits of this would be that one test's results/side effects cannot affect another's success/failure. This is particularly important when our integration tests are hitting an actual database.

- `POST /users/:id`
- `DELETE /users/:id`
