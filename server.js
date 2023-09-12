import express from 'express';
import mongoose from 'mongoose';

 // mongodb+srv://mansour:c7jVcufWFFm3lIk4@cluster0.u5stgcs.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://mansour:c7jVcufWFFm3lIk4@cluster0.u5stgcs.mongodb.net/test-db?retryWrites=true&w=majority')
.then(()=>{
    console.log('The server is connected with mongoDB 😎');
})
.catch(err=>{
    console.log('we have an error connecting to mongoDB',err);
})

const app = express();

 


//listening for requests
app.listen(3001, ()=> {
    console.log("The server is listening for requests....")
});