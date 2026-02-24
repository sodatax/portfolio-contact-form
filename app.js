// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3003;

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const info = [];

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
});

///fname=Hosea&lname=Nacanaynay&job=&company=&linkedin=&email=&other=&message=
app.post('/submit-form', (req,res) => {
    const u_info = {
        fname: req.body.fname,
        lname: req.body.lname,
        job: req.body.job,
        company: req.body.company,
        linkedin: req.body.linkedin,
        email: req.body.email,
        other: req.body.other,
        message: req.body.message
    };

    info.push(u_info);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.get('/admin', (req, res) => {
    res.send(info);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});