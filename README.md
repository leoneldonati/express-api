# BASIC API EXPRESS

This api is a basic example to create a simple api rest, the response from each route is a message with the request from the client.

## COMANDS

To run and test the api run the comand:

> npm run dev

### Dev DEPENDENCIES

Use _nodemon_ to restart the server while add changes to proyect.

---
> Some routes in app

```javascript
router.get("/products", (req, res) => {
  res.send("Products route");
});
router.get("/products/:id", (req, res) => {
  res.send("Product route");
});
```
