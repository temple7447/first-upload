const express = require("express")
const app=express();
app.listen(3000,()=>{
    console.log('the server is live');
});
app.use(express.static('public'));

app.post('/api', (request,response) => {
console.log(request);
});