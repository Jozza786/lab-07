
const express = require('express');
const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Jozza",
        email: "jozza@example.com",
        program: "BSCS"
    },
    {
        id: 2,
        name: "Sara",
        email: "sara@example.com",
        program: "BSSE"
    }
];

let nextId = 3;

// Home route
app.get('/', function (req, res) {
    res.send('Lab 07: Node.js and Express');
});

// GET: Display all students
app.get('/students', function (req, res) {
    res.json(students);
});

// GET: Display student by ID
app.get('/students/:id', function (req, res) {
    const id = Number(req.params.id);

    const student = students.find(function (s) {
        return s.id === id;
    });

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// POST: Add a new student
app.post('/students', function (req, res) {
    const body = req.body || {};
    const { name, email, program } = body;

    if (!name || !email || !program) {
        return res.status(400).json({
            message: "All fields needed"
        });
    }

    if (!email.includes('@')) {
        return res.status(400).json({
            message: "Email is not valid"
        });
    }

    const student = {
        id: nextId++,
        name: name,
        email: email,
        program: program
    };

    students.push(student);

    res.status(201).json(student);
});

// PUT: Update a student
app.put('/students/:id', function (req, res) {
    const id = Number(req.params.id);

    const student = students.find(function (s) {
        return s.id === id;
    });

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, email, program } = req.body || {};

    if (!name || !email || !program) {
        return res.status(400).json({
            message: "All fields needed"
        });
    }

    if (!email.includes('@')) {
        return res.status(400).json({
            message: "Email is not valid"
        });
    }

    student.name = name;
    student.email = email;
    student.program = program;

    res.json(student);
});

app.put('/students/:id', function (req, res) {
    const id = Number(req.params.id);

    const student = students.find(function (s) {
        return s.id === id;
    });

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, email, program } = req.body || {};

    if (!name || !email || !program) {
        return res.status(400).json({
            message: "All fields needed"
        });
    }

    if (!email.includes('@')) {
        return res.status(400).json({
            message: "Email is not valid"
        });
    }

    student.name = name;
    student.email = email;
    student.program = program;

    res.json(student);
});


// Start server
app.listen(3000, function () {
    console.log("Running at http://localhost:3000");
});
