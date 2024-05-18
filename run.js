const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/form-submit', (req, res) => {
    const newForm = req.body;
    console.log(newForm);
    setTimeout(()=>{
        res.send('Form submitted successfully');
    },2000)
    
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
