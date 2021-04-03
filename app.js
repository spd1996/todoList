const express = require('express')

const app = express()
app.use(express.json())

const port = 8081

let todoList = ["Complete Node Byte", "Play Cricket"];

// Get all TODOS:   

app.get("/todos", (request, response) => {
    response.send(todoList);
});

// Add a TODO to the list

app.post("/todos", (request, response) => {
    let newTodo = request.body.name;
    todoList.push(newTodo);
    response.status(201).send();
});

// Delete a TODO to the list

app.delete("/todos", (request, response) => {
    let deleteTodo = request.body.name;
    console.log(deleteTodo);
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i] === deleteTodo) {
            todoList.splice(i, 1);
            response.status(204).send();
        }
    }
});

app.all("/todos", (request, response) => {
    response.status(501).send()
})

app.all("*", (request, response) => {
    response.status(404).send()
})

app.listen(port, () => {
    console.log(`Nodejs server started on port ${port}`)
});
