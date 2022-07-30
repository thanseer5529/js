// function add(num1,num2,callback)
// {
//     let err=false
//     if(num1==0)
//     {
//         err=true
//     }
//     callback(num1+num2,err)
// }







// function multply(num1,num2,callback)
// {
// callback(num1*num2)
// }

// function div(num1,num2,callback)
// {
//     callback(num1/num2)
// }



// add(10,20,(sum,err)=>
// {if(err)
//     {
//         console.log("first number is zero")
//     }
// else
// {
//     console.log(sum)
//     multply(sum,sum,(product)=>
//     {
//         console.log(product)
//         div(product,10,(result)=>
//         {
//             console.log(result)
//         })
//     })
// }
// })







// function add(num1,num2,fn)
// {
// console.log(fn(num1,num2,)+num1+num2)
// }


// function mul(num1,num2,)
// {
//     return num1*num2
// }
// add(10,5,mul)





// const post=[{id:1,item:'first comment'},{id:2,item:'second comment'}]
//     getpost=()=>

//     {
//         setTimeout(()=>
//         {

//         post.forEach((i)=>{
//             console.log(i.id,i.item)
//         })
        
//         },1000)
//     }
// addpost=(n)=>
// {
//     setTimeout(() => {
//         post.push(n)
//         const oc=Promise((resolve,reject)=>{
//             return resolve()
//         })
//     }, 2000);
// }
// addpost({id:3,item:"third comment"}.then(getpost).catch(()=>{console.log("error occur")}))




// let p1=new Promise((resolve,reject)=>{
//     reject();
// });
// p1.then(()=>
// {
//     console.log("yes true")
// }).catch(()=>{
//     console.log("error occur")
// });







// function add(num1,num2,callback)
// {
//     err=false
//     if(num1==0)
//     {
//         err=true
//     }
//     callback(num1+num2,err)
// }
// add(0,20,(sum,err)=>{
//     if(err)
//     {
//         console.log('first number is zero')
//     }
//     else
//     {
//         console.log('first number is natural number')
//     }
// })






// function add(num1,num2,mul)
// {
//     err=false
//     if(num1 ===0|| num2===0)
//     err=true
//     mul(num1+num2,err)
// }

// function multy(num1,num2,div)
// {
//     div(num1*num2)
// }


// add(2,5,function mul(num1,err)
// {
//     if(err)
//     console.log("one of the number is zero")
//     else
//     multy(num1,num1,(da)=>
//     {
//         console.log(da/10);
//     })
// })








// const Promise=require('promise')

// function add(num1,num2)
// {

//     return new Promise((resolve,reject)=>{
//         if(num1 ===0|| num2===0)
//         reject()
//         else
//         resolve(num1+num2)

//     })
   
// }

// function multy(num1,num2,div)
// {
    
//     div(num1*num2)
// }

// add(0,7).then((sum)=>console.log("sum is "+sum)).catch(()=>{console.log("error occur")})







// const Promise=require('promise')
// function add(num1,num2)
// {
//         return new Promise((resolve,reject)=>{
//         if(num1 ===0|| num2===0)
//         reject()
//         else
//         resolve(num1+num2)
//     })   
// }
// function multy(num1,num2)
// {    return new Promise((resolve,reject)=>{

//         // resolve(num1*num2) 
//         reject()
// }) 
// }
// function div(num1,num2)
// {   return new Promise((resolve,reject)=>{
//         resolve(num1/num2)
//         // reject()
// })
// }

// add(2,7).then((sum)=>
// {
//     console.log(sum)
//     return multy(sum,sum)
// }).then((pro)=>{console.log(pro)
//     return div(pro,10)
// }).then((ans)=>{console.log(ans)})
// .catch(()=>{
//     console.log('one is zero')
// })
















// const Promise=require('promise')
// function add(num1,num2)
// {
//         return new Promise((resolve,reject)=>{
//         if(num1 ===0|| num2===0)
//         reject()
//         else
//         resolve(num1+num2)
//     })   
// }
// function multy(num1,num2)
// {    return new Promise((resolve,reject)=>{

//         resolve(num1*num2) 
//         // reject()
// }) 
// }
// function div(num1,num2)
// {   return new Promise((resolve,reject)=>{
//         resolve(num1/num2)
//         // reject()
// })
// }




// add(2,7).then((sum)=>
// {
//     console.log(sum)
//     return multy(sum,sum)
// }).then((pro)=>{console.log(pro)
//     return div(pro,10)
// }).then((ans)=>{console.log(ans)})
// .catch(()=>{
//     console.log('one is zero')
// })







// const Promise=require('promise')
// function abc(a,b) 
// {   return new Promise((resolve,reject)=>
//     {
//         if(a===0 || b===0)
//         reject('abc is zero')
//         else
//         resolve(a+b)
//     })
// }


// function pqr(a,b) 
// {   return new Promise((resolve,reject)=>
//     {
//         if(a===0 || b==0)
//         reject('pqr is zero')
//         else
//         resolve(a*b)
//     })
// }

//     // console.log(a)
//     console.log(res)
// pqr(0,0).then((res)=>{
//     // console.log(a)
//     console.log(res)
//     }).catch((b)=>{
//         console.log(b)
//     })
//     })
//     .catch((b)=>{
//         console.log(b)
//     })
    
    
    

// const Promise=require('promise')
// function getname()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve('nikhil')
//         },3000)
//     })
// }




// function getmobile()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             resolve('12346789')
//         },2000)
//     })
// }


// Promise.all([getname(),getmobile()]).then((res)=>
// {
// console.log(res);
// })


// async function getuser()
// {
// let name= await getname()
// console.log(name)
// let mobile= await getmobile()
// console.log(mobile)
// }
// getuser()













// function abc()
// {
// return new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         console.log("thanseer")
//         resolve("thanu")
//         resolve()
//     },4000)
//     }) 
// }
// async function a()
// {
// let th= await abc()
// console.log(th)
// }
// a()










// function abc()
// {
//     return new Promise((resolved,reject)=>
//     {
//         setTimeout(()=>{
//             resolved('thanseer')
//     },4000)
// })   
// }
// async function a()
// {
// let th= await abc()
// console.log(th)
// }
// a()





// function abc()
// {
//     return new Promise((resolved,reject)=>
//     {
//         setTimeout(()=>{
//             resolved('thanseer')
//     },4000)
// })   
// }
// abc().then((a)=>{
//     console.log(a)
// })









// function abc()
// {
//     return new Promise((resolve,rejectt)=>
//     {
//         setTimeout(()=>
//         {
//             resolve('from abc')
//         },2000)
//     })
// }
// function pqr()
// {
//     return new Promise((resolve,rejectt)=>
//     {
//         setTimeout(()=>
//         {
//             resolve('from xyz')
//         },4000)
//     })
// }
// abc().then((a)=>{
//     console.log(a);
//     pqr().then((b)=>{
//         console.log(b)})})

















// function abc()
// {
//     return new Promise((resolve,rejectt)=>
//     {
//         setTimeout(()=>
//         {
//             console.log("from abc")
//             resolve(2)
//         },2000)
//     })
// }
// function pqr()
// {
//     return new Promise((resolve,rejectt)=>
//     {
//         setTimeout(()=>
//         {
//             console.log('from pqr')
//             resolve(1)
//         },4000)
//     })
// }

// pqr().then(()=>{abc()}) it takes total 6 secs    first pqr then abc



// async function res()
// {
// await pqr()
// abc()                this also takes 6 secs first pqr the abc
// }
// res()



// pqr()
// abc()        it only takes 4 sec but asynchronous 




// Promise.all([pqr(),abc()]).then((a)=>{console.log(a)  it takes 4 sec but 
// })







// function abc()
// {
//     return new Promise((resolve,rejectt)=>
//     {
//         setTimeout(()=>
//         {
//             resolve('from abc')
//         },2000)
//     })
// }
// function pqr()
// {
//     return new Promise((resolve,rejectt)=>
//     {
//         setTimeout(()=>
//         {
//             resolve('from pqr')
//         },4000)
//     })
// }


// async function lol()
// {
// pqr().then((a)=>{console.log(a)})    // 1...pqr().then((a)=>{console.log(a);abc()})        2...await pqr().then((a)=>{console.log(a)}) 
// abc().then((a)=>{console.log(a)})
// }
// lol()






// function rest()
// {
// return new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         console.log("first")
//         resolve()
//     },1000)
// }
// )
// }

// async function lol()
// {
// await rest()
// console.log("second")
// }
// lol()







// async function abc()
// {
//     return new Promise((a,b)=>{
//         setTimeout(()=> {
//         a('thanu')    
//         },1000)
//     })}
// abc().then((a)=>{
//     console.log(a)
// })





