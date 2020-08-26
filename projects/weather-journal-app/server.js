// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const app = express();

// Start up an instance of app

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server - to access the app http:localhost:/8000
const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log("running on localhost: ${ port }`");
}

// my first comment