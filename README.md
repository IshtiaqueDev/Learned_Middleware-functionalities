# Middleware Learning (Express.js)

This repository contains my hands-on learning of **middleware in Express.js**.  
It includes a small practice project (~60 lines of code) focused on understanding how middleware works in real applications.

---

##  What I Learned

- What is middleware in Express.js
- How request-response cycle works
- How to create custom middleware
- How `next()` passes control to the next function
- How middleware can be used for logging, authentication, and validation

---

##  Concept Summary

Middleware is a function that runs **between request and response** in Express.js.

It has access to:
- `req` (request object)
- `res` (response object)
- `next()` (moves to next middleware/route)

---


Simple and minimal to focus only on middleware logic.

---

##  How It Works

1. Request comes to the server  
2. Middleware runs first  
3. It can modify request/response or stop it  
4. If `next()` is called → request moves forward  
5. Final route sends response

---

## Example Middleware

```js
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
