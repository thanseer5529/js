1.



// var req=require('readline-sync')
// var first=req.question("enter first number?   ")
// var second=req.question("enter second number?  ")
// add=(a,b)=>
// {
//     return Number(a)+Number(b);
// }
// console.log(add(first,second))



2.



// var sample=require("./sample")
// var req=require("readline-sync")
// var first=parseInt(req.question("enter the first number      "))
// var second=parseInt(req.question("enter the second number    "))
// console.log(sample.add(first,second))




// var http=require('http')
// var fs=require('fs')
// http.createServer(server).listen(7000)
// function server(a,b)
// {
//     fs.readFile("sample.html",function(err,data)
//     {
//     b.write(data)
//     b.end();
//     })
// }




// let i=0
// var d1=new Date();
// while(new Date()-d1<=4000)
// {
// console.log("hello"+i++);
// }




// let i=0
// var d1=new Date();
// while(new Date()-d1<=4000)
// {}
// console.log('end')






// var a=require('readline-sync')
// var a=a.question('enter the number  ')
// var d1=new Date()
// for(i=1;i<=a;i++)
// console.log(i)
// console.log(new Date()-d1)





// var http=require('http')
// var up=require('upper-case')
// var fs=require('fs')
// http.createServer(server).listen(7000)
// function server(a,b)
// {
// var data=fs.readFileSync('sample.html')
// b.write(data)
// b.end()
// }





// var http=require('http')
// var up=require('upper-case')
// var fs=require('fs')
// http.createServer(server).listen(8000)
// function server(a,b)
// {
// b.writeHead(200,{'content-type':'text/html'})
// b.write(up.upperCase('thanHu'))
// b.end();
// }







// var http=require('http')
// var fs=require('fs')
// http.createServer(server).listen(7000,()=>{console.log("server is running............")})
// function server(req,res)
// {
// if(req.url==='/')
// {
//     fs.readFile('sample.html',function(err,data)
//     {
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data);
//         res.end();
//     })
// }
// else if(req.url==='/login')
// {
//     fs.readFile('login.html',function(err,data)
//     {
//         res.write('login')
//         res.end();
//     })
// }
// else
// {
// res.write('please enter url correctly')
// res.end()
// }
// }




// var fs=require('fs')
// console.log(fs.readFileSync('text.txt').toString())



// var fs=require('fs')
// fs.readFile('text.txt',(err,data)=>{console.log(data.toString())})
// console.log("hi thanu here.")


