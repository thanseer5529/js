// // const express = require("express")
// // const mongo = require("mongodb")
// const path = require("path")
// // // const fs=require("fs")
// // // const fp = require("express-fileupload")
// // const bodyparser=require("body-parser")
// // const app = express()
// // app.use(express.json());

// // app.listen(3000, () => console.log("port connected"))
// // // app.use(bodyparser.urlencoded({ extended: false }))
// // // app.use(bodyparser.json())

// // app.set("view engine","ejs")
// // // mongo.MongoClient.connect("mongodb://localhost:27017", (err) => {
// // //     if (err)
// // //     {
// // //         console.log("db not connected");
// // //     }
// // //     else {
// // //         console.log("db connected");
// // //     }
// // // })
// // app.get('/', (req, res) => {
// //     res.render(path.join(__dirname+"/test.ejs"));
// // })
// // app.post('/data', (req, res) => {
// //     console.log(req.body);
// // })

// const express = require("express");

// const app = express();
// const bodyparser=require("body-parser")

// // app.use(bodyparser.urlencoded({ extended: false }))
// // app.use(bodyparser.json())
// app.use(express.json());
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`connection established on ${port}`);
// });

// app.get("/", (req, res) => {
//     console.log("vokkey");
//     res.render(path.join(__dirname+"/test.ejs"));
// })
// app.post('/data', (req, res) => {    
//     console.log(req.body);
// })




// const express = require("express");
// var mongo = require("mongoose");
// // var Obj=mongo.Types.ObjectId();
// const app = express();

// app.use(express.json());

// const db = require("./connection");

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`connection established on ${port}`);
// });

// db.db_connect();






// //welcome message
// app.get("/", (req, res) => {
//     res.send("welcome to api generation");
// });

// app.post("/student", async (req, res) => {
//     var body = req.body;
//     let require = ["name", "place"];
//     // var  err = [];
//     err = require.filter((value) => {
//         if (!Object.keys(body).includes(value)) {
//             //  err.push(value);
//             return value;
//             //  console.log(err);
//             //  console.log(err.length);
//         }
//         console.log(err);
//     });
//     if (err.length <= 0) {
//         let record = await db.get_db_status().collection("user").findOne({ name: req.body.name, place: req.body.place });
//         if (record) {
//             res.json({ message: "student all ready exist", record: record });
//         } else {
//             db.get_db_status()
//                 .collection("user")
//                 .insertOne(req.body, (err, data) => {
//                     if (err) res.json({ message: "error occured in add new student", error: err });
//                     else res.json({ message: "new stduent added ", status: data });
//                 });
//         }
//     } else {
//         console.log(err);
//         res.json({ message: "required field was not found", required: err });
//     }
// });

// //list all students;

// app.get("/student", async (req, res) => {
//     let record = await db.get_db_status().collection("user").find().project({}).toArray();
//     if (record.length <= 0) res.json({ message: "there is no student" });
//     else res.json(record);
// });

// app.patch("/student", async (req, res) => {
//     let required = ["name", "place"];
//     let keys = Object.keys(req.body);
//     err = required.filter((value) => {
//         return !keys.includes(value);
//     });
   
//     if (err.length <= 0) {
//         let record = await db.get_db_status().collection("user").findOne({ name: req.body.name, place: req.body.place });
//         console.log(record);
//         if (record) {
//             res.json({message:"record alredy exist",record:record})
//         } else {
//             id = req.body.id;
//             delete req.body.id;
//             db.get_db_status()
//                 .collection("user")
//                 .updateOne({ _id: mongo.Types.ObjectId(id) }, { $set: req.body }, (err, data) => {
//                     if (!err) {
//                         res.json(data);
//                     } else {
//                         res.json({ message: "error occured", error: err });
//                     }
//                 });
//         }
//     } else {
//         res.json({ message: "required field was not found", required: err });
//     }
// });
// app.delete("/student/:id", (req, res) => {
//     db.get_db_status()
//         .collection("user")
//         .deleteOne({ _id: mongo.Types.ObjectId(req.params.id) }, (err, data) => {
//             if (!err) {
//                 res.json({ message: "deleted", status: data });
//             } else {
//                 res.json({ message: "error occured in deletiion", error: err });
//             }
//         });
// });







const express = require("express");
// var mongo = require("mongoose");
const bodyparser = require("body-parser")
const path = require("path");


// const fp = require("express-fileupload")

const port = process.env.PORT || 3000;

const app = express();

// app.use(fp())

const multer=require("multer");


const str = multer.diskStorage({
    destination: (req, file, cb) => {
                cb(null,"./images")
    },
    filename:(req, file, cb)=>
    {
        cb(null,Date.now()+"--"+file.originalname)
    }
})
const upload=multer({storage:str})

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`connection established on ${port}`);
});
app.get('/',(req, res) => {
    console.log("home1");
    res.render(path.join(__dirname+"/test.ejs"));
})
app.post('/data',upload.array("",),(req, res) => {
    // upload.single("ff"),
    console.log("call from client ayn");    
    console.log(req.body); 
    // console.log(req.files);
    console.log(req.file,"vokkey");       
    // res.redirect("/")
})       
      