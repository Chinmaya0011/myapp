// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies and URL-encoded bodies
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // POST route to handle form submission
// app.post('/form-submit', (req, res) => {
//     const newForm = req.body;
//     console.log(newForm);
//     setTimeout(()=>{
//         res.send('Form submitted successfully');
//     },2000)
    
// });z

// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });
function map(array, callback) {
    const result = []; // Initialize an empty array to hold the transformed elements
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array)); // Apply the callback to each element and push the result to the new array
    }
    return result; // Return the new array with transformed elements
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4];
  const doubled = map(numbers, function(number) {
    return number * 2;
  });
  
  console.log(doubled); // Output: [2, 4, 6, 8]
  
