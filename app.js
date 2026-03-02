// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

app.set('view engine', 'ejs');

// Define the port number where our server will listen
const PORT = 3003;

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const info = [];

app.get('/', (req,res) => {
    res.render('resume');
});

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/contact', (req, res) => {
    res.render('contact-form');
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

    res.render('confirmation', {u_info});
});

app.get('/admin', (req, res) => {
    let message;

    if(info.length==0){
        message = "There are no submissions.";
    }else{
        message = "Submissions:"
    }
    res.render('admin', {info, message});
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});