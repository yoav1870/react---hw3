# React Client App

Welcome to my React client-side application!

## Getting Started

To begin, follow these steps:

1. Clone the Repository: Download the code from the GitHub repository:

```bash
 git clone https://github.com/yoav1870/react---hw3
```

2. Navigate to the Directory: Move to the cloned directory:

```bash
 cd react---hw3
```

3. Install Dependencies: Ensure all required dependencies are installed by running:

```bash
 npm install
```

4. Start the Application: Start the application using one of the following commands:

```bash
 node main.jsx /or/ npm start
```

## Background Story

This client-side application is designed to work in conjunction with a server-side application that I've also developed and uploaded (https://github.com/yoav1870/node.js---hw2). The server-side application serves as the backend, allowing this client-side application to perform CRUD (Create, Read, Update, Delete) operations using a MongoDB database.

## API Reference

### Get all plans

```http
  GET /api/plans
```

#### respone

##### Status: 200 OK

##### Body: Array of plan objects

### Get plan

```http
  GET /api/plans/${id}
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `id`      | `string` | **Required**. Plan ID |

#### respone

##### Status: 200 OK

##### Body: Plan object

### Add a new plan

```http
  POST /api/plans/${id}
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `id`      | `string` | **Required**. Plan ID |

##### Request Body

```http
  {
    "namePlan" : "Example Plan"
  }
```

#### respone

##### Status: 201 Created

##### Body: "Created"

### Update a plan by ID

```http
  PUT /api/plans/${id}
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `id`      | `string` | **Required**. Plan ID |

##### Request Body

```http
  {
    "namePlan" : "Update plan name"
  }
```

#### respone

##### Status: 200 ok

##### Body: "plan with id: ${id} updated"

### Delete a plan by ID

```http
  GET /api/plans/${id}
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `id`      | `string` | **Required**. Plan ID |

#### respone

##### Status: 200 OK

##### Body: "Deleted plan with id: ${id} "

## Usage Instructions

The application is composed of several components:

- Header: Located at the top right corner, there is a button "Home." When clicked, this button sends a request to retrieve all data from the database.

Body:

- Form: Allows users to add data to the database through the server.
- Search: Enables clients to search for plans by their ID.
- PlanList: Provides functionality for clients to delete or update existing plans.

## Feedback

If you have any feedback, please reach out to us at https://github.com/yoav1870
