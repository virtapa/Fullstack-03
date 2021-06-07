const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors')

app.use(cors())


app.use(express.json());

morgan.token("person", (request, response) => {
  if (request.method === "POST") return JSON.stringify(request.body);
  return null;
});

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :person"
  )
);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "04055588707",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "05085588707",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "045223366",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "0401324568",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${
      persons.length
    } people</p> <p>${new Date().toString()}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

const generateId = () => {
  return Math.round(Math.random() * 10000);
};

app.post("/api/persons/", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "name is missing",
    });
  }
  if (!body.number) {
    return response.status(400).json({
      error: "number is missing",
    });
  }
  if (persons.some((person) => person.name === body.name)) {
    return response.status(400).json({
      error: "name already exists",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);

  response.json(person);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end("<p>person is missing</p>");
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
