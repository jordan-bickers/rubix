# OUR APIs

## 1. Getting member names

Request type and route:
GET /api/v1

Response:

```sh
[
	{
		"id": 1,
		"name": "Patchy",
		"group": null
	},
	{
		"id": 2,
		"name": "Getrude",
		"group": null
  ...}]
  ```

  ## 2. Add a new member

  Request type and route:
  POST /api/v1

  Request body:

  ```sh
  {
    "name": "Mr Pickles"
  }
```
  Response:

  ```sh
  {
    "id: 10001,
    "name": "Mr Pickles",
    "group": null
  }
  ```

  ## 3. Update member

  Request type and route:
  PATCH /api/v1/10000

  Request body:
```sh
  {
    "name": "Pug"
  }
```
  Response:
```sh
  {
    "id: 10000,
    "name": "Mr Pug",
    "group": null
  }
```

## 4. Delete a member

  Request type and route:
  DELETE /api/v1/10001

  Response:

```sh
OK
```



