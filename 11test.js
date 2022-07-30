// var req=require('readline-sync')
// var num1=req.question('enter first number ')
// var num2=req.question('enter limit number ')
// for(num1;num1<=num2;num1++)
// console.log(num1)  


// var a=new Date()
// console.log(a.getHours())



// const arr=[1,5,8,10,4,100,85]
// console.log(Math.max.apply(null,arr))





// f=new Date()
// console.log("hello")
// for(i=1;i<=42540;i++)
// console.log("loop"+i)
// console.log("end")
// console.log(new Date()-f)






// function longtask(milli)
// {
//     dt=new Date()
//     while((new Date()-dt) <=milli)
//     {
        
//     }
// }
// console.log("started")
// longtask(4000)
// console.log("end")
 


// st1=()=>
// {
//     console.log("going1")
// }

// st2=()=>
// {
//     console.log("going2")
// }
// st3=()=>
// {
//     console.log("going3")
// }
//  console.log("started")
//  setTimeout(st1,1000)
//  console.log("started")
//  setTimeout(st2,2000)
//  console.log("started")
//  setTimeout(st3,3000)





// function add(a,b,dis)
// {
// let sum =a+b
// dis(sum)
// }

// function display(item)
// {
//     console.log(item)
// }
// add(6,5,display)



// var a=require("readline-sync")
// var b=Number(a.question("enter a number "))
// console.log(b+10)





// var a=require("./sample")
// console.log(a.arr)
// a.abc()





// var uc=require("upper-case")
// console.log(uc.upperCase("hello world"))




// var h=require('http')
// h.createServer((a,b)=>{b.write("thanseer");b.end();}).listen(7000)




// var fs=require("fs")
// var http=require('http')
// http.createServer(server).listen(7000)
// function server(req,res)
// {
// var data=fs.readFileSync("sample.html")
// res.write(data)
// res.write("thanu")
// res.end()
// }





// var fs=require("fs")
// var http=require('http')
// http.createServer(server).listen(7000,()=>{console.log('server is running.....')})
// function server(req,res)
// {
//     if(req.url==='/')
//     {
//         fs.readFile("sample.html",function(err,data)
//         {
//             res.writeHead(200,{'content-type':'text/html'})
//             res.write(data)
//             res.write("thanu")
//             res.end()
//         })
//     }
//     else if(req.url==='/login')
//     {
//        fs.readFile("login.html",function(err,data)
//         {
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
//         })
//     }
//     else
//     {
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write("please enter the url correctly")
//         res.end()
//     }
// }


















// var fs=require("fs")
// var http=require('http')
// http.createServer(server).listen(7000,()=>{console.log('server is running.....')})
// function server(req,res)
// {

//     if(req.url==='/')
//     {
//         fs.readFile("sample.html",function(err,data)
//         {
//             res.writeHead(200,{'content-type':'text/html'})
//             res.write(data)
//             res.write("thanu")
//             res.end()
//         })
//     }
//     else if(req.url==='/signup')
//     {
//        fs.readFile("signup.html",function(err,data)
//         {
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
//         })
//     }
//     else if(req.url==='/signupaction')
//     {
//         res.write("thanu")
//         res.end();
//     }
//     else
//     {
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write("please enter the url correctly")
//         res.end()
//     }
// }











// var url=require('url')
// var fs=require("fs")
// var http=require('http')
// const { parse } = require('path')
// http.createServer(server).listen(7000,()=>{console.log('server is running.....')})
// function server(req,res)
// {
//     var q=url.parse(req.url,true)
    
//     if(q.pathname==='/')
//     {
//         fs.readFile("sample.html",function(err,data)
//         {
//             res.writeHead(200,{'content-type':'text/html'})
//             res.write(data)
//             res.write("thanu")
//             res.end()
//         })
//     }
//     else if(q.pathname ==='/signup')
//     {
//        fs.readFile("signup.html",function(err,data)
//         {
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
//         })
//     }
//     else if(q.pathname==='/signupaction')
//     {
//         a=q.query
//         console.log(a.fname,a.lname,a.mobile)
//         res.write("form submited")
//         res.end();
//     }
//     else
//     {
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write("please enter the url correctly")
//         res.end()
//     }
// }










// var fs=require('fs')
// var url=require('url')
// var http=require('http')
// http.createServer(server).listen(7000,function(){console.log('server created and its running')})
// function server(req,res)
// {
// re=url.parse(req.url,true)
// if(re.pathname==='/')
// {
//     fs.readFile('sample.html',(err,data)=>{
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }    
// else if(re.pathname==='/login')   
// {
//     fs.readFile('login.html',function(err,data){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }
// else if(re.pathname==='/signup')
// {
//           fs.readFile('signup.html',function(err,data){
//           res.writeHead(200,{'content-type':'text/html'})
//           res.write(data)
//           res.end()
//         })
// }
// else if(re.pathname=='/forms')
// {
// var data=re.query
// console.log(data.fname,data.lname,data.mobile)
// res.end()
// }
// else
// {
//     res.writeHead(404,{'content-type':'text/html'})
//     res.write("error please enter the correct url....!")
//     res.end();
// }
// }






// const fs=require('fs')
// const http=require('http')
// const url=require('url')
// http.createServer(app).listen(2500,function(){ console.log('server creatd')})
// function app(req,res)
// {
//     const tab=url.parse(req.url,true)
//     if(tab.pathname==='/')
//     {
//         fs.readFile('signup.html',function(err,data)
//         {
       
//             res.write(data)
//             res.end()
//         })
//     }
//     else if(tab.pathname==='/signup1')
//     {
//         const value=tab.query;
//         console.log(value.fname)
//         res.end()
//     }
// }








