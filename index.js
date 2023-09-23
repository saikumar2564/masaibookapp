const express=require("express")
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookroutes');
const { connection } = require("./config/mongoDB");
const app = express();
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req,res) => {

    res.json({message:"Welcome to backend"})
  })

app.use('/api/books', bookRoutes);

app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("connected to db");
      console.log(`Server Running on ${process.env.PORT}`);
    } catch (error) {
      console.log(error);
    }
  });


