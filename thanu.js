// var a=['sun','mon','tue','wed','thu','fri','sat'];
// a.forEach(item=>document.write(item+' '))

// let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// abc.map((element)=>console.log(Number(element+"10")+10))
// alert('your system getting weak')

// var a=0
// document.addEventListener("click", function () {
//     a++
//     console.log(a)
// })

// var a = 1;
// x = setInterval(function () {
//     if (a == 100) clearInterval(x);
//     console.log(a);
//     a++;
// }, 10);

// document.querySelector("button").addEventListener('click',function()
//     {
//     document.getElementById('min').innerHTML='00';
//     document.getElementById('sec').innerHTML='00';
//     document.getElementById('m-sec').innerHTML='00';
//     setInterval(function(){
//         if(document.getElementById('m-sec').innerHTML<60)
//         {
//             document.getElementById('m-sec').innerHTML=Math.floor(document.getElementById('m-sec').innerHTML)+1;
//         }
//        else if(document.getElementById('sec').innerHTML<60)
//         {
//             document.getElementById('m-sec').innerHTML=0;
//             document.getElementById('sec').innerHTML=Math.floor(document.getElementById('sec').innerHTML)+1;
//         }
//     else if(document.getElementById('min').innerHTML<2)
//     {
//         document.getElementById('sec').innerHTML=0;
//         document.getElementById('min').innerHTML=Math.floor(document.getElementById('min').innerHTML)+1;
//     }
//     else
//     {
//         document.getElementById('m-sec').innerHTML=0;
//         document.getElementById('sec').innerHTML=0;
//         document.getElementById('min').innerHTML=0;
//     }
//     },00);
//     })

// j=0;
// i=0;
// var c=['red','yellow','white','black','blue','green']
// a=document.querySelector("h1").style;
// n=document.getElementById("number");
// setInterval(() => {

//     a.color=c[i];
//     i++;
//        n.innerHTML=j++;
//         },1000)

// var a=[10,25,45,65,85];
// var select="<select>"
// a.forEach(item=>{
// select=select+"<option>"+item+"</option>"
// })
// document.write(select);

// a=[10,20,30,40,45,55,65,50,1,2,5,100];
// var k=a.filter(function(b)
// {
// return b%10==0;
// })
// console.log(k);
// console.log(a);

// var k=a.find(function(b)
// {
// return b%10==10;
// })
// console.log(k)
// console.log(a)

// var k=a.map(function(b)
// {
// return b%10==0;
// })
// console.log(k)
// console.log(a)

// let person = function  (name, place, address, mark)  {
//     this.name = name;
//     this.place = place;
//     this.mark = mark;
//     this.address = address;
//     this.name_place = () => {
//         return this.name+" "+this.place
//     }
// }
// let thanseer=new person("thanseer","edavanna","koraliyadan",80)
// let amruthraj = new person("amruthraj", "vazhakkad", "noonjikkara", 90)
// console.log(thanseer.name);
// console.log(amruthraj.name);
// console.log(amruthraj.name_place());

// thanseer.name = "thanu"
// console.log(thanseer.name);
// delete thanseer.name
// console.log(thanseer);
// thanseer.age = 12
// console.log(thanseer.age);
// console.log(amruthraj)
// console.log(thanseer)

// var n,p,m;
// var people=function(name,place,mark)
// {
// this.n=name,
// this.p=place,
// this.m=mark,
// this.nameplace=function()
// {
//     return this.n+" "+this.p
// }
// };
// var obj1=new people("thanseer","edavanna",75)
// var obj2=new people("amruthraj","vazhakkad",80)
// console.log(obj1.n)
// console.log(obj2.n)
// console.log(obj1.nameplace())
// console.log(obj2. nameplace())
// console.log(obj2.m)

// a="thanseer";
// b="edavanna";
// console.log(`${a+' k'} hello`);

// var ths=function()
// {
//     this.name='thanseer',
//     this.place='edavanna',
//     this.age=30,
//     this.mark='85/100',
//     this.details=function()
//     {
//         return this.name+'\n'+this.place; //this or this;
//     }
// };
// function display(a)
// {
//     document.write(a.details()+'<br>');
//     document.write(a.name+'<br>');
//     document.write(a.age+'<br>');
//     document.write(a.mark+'<br>');
//     document.write(typeof(a.age)+'<br>');
// }
// var obj1=new  ths;
// display(obj1);

// a=10;
// b='10'
// console.log(a==b)
// console.log(a===b)

// var a={
// name:"thanseer",
// abc:function(){return 45+10}
// };
// console.log(a.name);
// console.log(a.abc());

// class student
// {
//     constructor(name,mark,place)
//     {
//     this.n=name;
//     this.m=mark;
//     this.p=place;
//     }
//     status()
//     {
//         if(this.m>=45)
//         return 'pass'
//         else
//         return 'fail'
//     }
// };
// var a=new student( "thanseer",55,"edavanna")
// var b=new student( "nikhil_raj",35,"kizhisheri")
// console.log(a.status());
// console.log(b.status());

// person = function (n, m, p) {
//     this.n = n;
//     this.m = m;
//     this.p = p;
//     this.status1 =function ()  {
//         return this.m >= 45 ? 'pass' : "fail";
//     }
// }
// a = new person("thanseer", 45, "chalippadam")
// b = new person("amruthraj", 35, "noonjikkara")
// console.log(a);
// console.log(b);
// console.log(a.status1());
// console.log(b.status1());

// var points = [40, 100, 1, 5, 25, 10];
// console.log(points)
// document.querySelector('button').addEventListener("click",abc)
// function abc()
// {
// for (i = points.length -1; i > 0; i--)
// {
//   j = Math.floor(Math.random() * i)
//   k = points[i]
//   points[i] = points[j]
//   points[j] = k
// }
// console.log(points)
// }

// a=[10,45,989,1,5,100,250,50,2];
// b=['a','45','22','abcd','ab','98'];
// console.log(a.sort(function (a,b){return (b-a)}));

// console.log(a.sort().reverse());
// console.log(a.sort());

// console.log(a.sort());
// console.log(b.sort());
// console.log(b.reverse());

// function abc()
// {
// a="1234567890".split("");
// l=a.length;
// for(i=0;i<Math.floor(l/2);i++)
// {
// t=a[i]
// a[i]=a[l-1-i];
// a[l-1-i]=t;
// }
// console.log(a)
// }
// abc()

// a=[10,25,30,40,50];
// b=a.filter((t)=>
//     {
//         return t%10==0
//     })
// console.log(b)

// a=[10,25,30,40,50];
// b=a.map((t)=>
//     {
//         return t%10==0
//     })
// console.log(b)

// a=[10,25,30,40,50];
// b=a.find((t)=>
//     {
//         return t%10==0
//     })
// console.log(b)

// var d=new Date();
// console.log(d.getFullYear())
// console.log(d.getMonth())
// console.log(d.getDate())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())
// console.log(d.getTime())
// console.log(d.getFullYear())
// console.log(Date.now())

// console.log(Math.random()*(1000-50)+50)
// var a=(18<20)?"yes":"no";
// console.log(a);
// var a=[10,20,30,40,50,55];

// a={
//     name:"thanseer",
//     place:"edavanna",
//     age:45,
// };
// var a=[10,20,30,40,50,55];

// for(i in a)
// {
//     console.log(a[i])
// }

// for(let i=0;i<10;i++) //var
// {
//  console.log(i )
// }
//  console.log(i)

// a=[10,25,45,90,45]
// t=0;
// for(i of a)
// {
// t+=i;
// }
// console.log(t)

// a = [1, 2, 3, 4, 5];
// for(i in a) {
//     console.log(i);
// }
// console.log("\n\n\n")
// for(i of a)
// {
//     console.log(i)
// }

// console.log("\n\n\n")

// a.forEach((el,ab,cd)=> {
//     console.log(el,ab,cd);
// });

// a.forEach(function(el,ab,cd)
// {
//     console.log(el,ab,cd);
// })

// var a=item=>
// {
//     console.log(item);
// }
// a(5)

// x = "";
// try {
//     if (x == "") {
//         throw "empty ";
//     }
// } catch (e) {
//     console.log(e);
// }
// finally
// {
//     console.log("aldone");
// }

// function myFunction() {

//     message = "thanseer"
//     x=19
//     try {
//       if(x == "") throw "empty";
//       if(isNaN(x)) throw "not a number";
//     //   x = Number(x);
//       if(x < 5) throw "too low";
//       if(x > 10) throw "too high";
//     }
//     catch(err) {
//       document.write(err)
//     }
// }
//   myFunction()

// a=null
// abc();
// function abc()
// {
//   a=10;
//   console.log(a+10);
// }
// console.log(a);

// for(i=0;i<10;i++)
// {}
// console.log(i);

// "use strict";

// let a=10.45;
// console.log(
// a.toFixed(3),a.toPrecision(3))

// person2=
// {
// first_name:'thanseer',
// second_name:"thanu",
// }

// person1=
// {
// full:function ()
// {
//   return this.first_name+" "+this.second_name;
// }}
// console.log(person1.full.call(person2))

// function abc(a)
// {
// console.log(a);        //  "()=> " is equal to "function ()""
// }
// abc(10)

// abc=(a,b)=>
// {
//   console.log(a+b)
// }
// abc(10,25)

// abc=function ()
// {
//   console.log("hello")
// }
// abc()

// abc=()=>
// {
// document.write("hello")
// }

// a=0
// x=setInterval(() => {
// console.log(a+=1)
// if(a==5)
// {
// clearTimeout(x)
// aa();
// a1();
// a2();
//     a3();

// }
// }, 1000);

// aa=()=>
// {
//   console.log("exit");
// }

// a1=()=>
// {
//   console.log("1");
// }

// a2=()=>
// {
//   console.log("2");
// }

// a3=()=>
// {
//   console.log("3");
// }

// class abc {
//     constructor(a) {
//         this.a = a;
//     }
//     calc(ss) {
//         return ss.a + this.a;
//     }
// }
// }
// calc=(a,b)=>
// {
// return a+b;
// }
// ob1 = new abc(10);
// console.log(calc(ob1.a,ob2.a));
// console.log(ob1.calc(new abc(20)));

// console.log("thanseer");
// n=0
// b=setInterval(()=>{
//   n+=1;
// console.log('hello')
// if(n==10)
// clearInterval(b)
// },1000);
// console.log("stoped")
// for(let i=1;i<=10;i++)
// console.log(i)

// document.addEventListener("click",()=>{
// console.log("clicked");
// })
// document.addEventListener("dblclick",()=>{
//   console.log("double_clicked");
//   })
// document.addEventListener("mousedown",()=>{
//   console.log("loaded");
//   })






// var student=
// {
// name:'thanseer',
// place:"chalippadam",
// age:20,
// };

// Object.defineProperty(student,"ch_name",{
//     set:function(name){this.name=name}
// })

// Object.defineProperty(student,"ch_place",{
//     set: function (place) { this.place = place}
// })

// Object.defineProperty(student,"ch_age",{
//     set:function(age){this.age=age}
// })

// Object.defineProperty(student,"reset",{
//     get: function () { this.name = "", this.place = "", this.age = "" }    
// })


// console.log(student.name+"  "+student.place+"  "+student.age);

// student.ch_name="thanu"
// student.ch_age="21"
// student.ch_place ="edavanna"
// console.log(student.name+"  "+student.place+"  "+student.age);

// student.reset

// console.log(student.name+"  "+student.place+"  "+student.age);

// a=parseInt(prompt("enter a number"))
// b=parseInt(prompt("enter a number"))
// alert(a+b)














































 

// var person=
// { 
//     name:'thanseer',
//     class:'ct',
//     age:21,
//     place:'edavanna',
// }
// var a=new Object(person)
// var b=person
// console.log(a.name)
// b.age=35
// console.log(b.age+" "+a.age+" "+person.age)
// a=person;
// console.log(a.name+'  '+a.class+' '+a.age+' '+a.place)
// Object.defineProperty(person,"reset",{
//     set :function(){a.name='..',a.class='..',a.age=0,a.place='..'}
// })
// Object.defineProperty(person,"reset1",{
//     get :function(){a.name='##',a.class='##',a.age=0,a.place='##'}
// })
// a.reset=8
// console.log(a.name+'  '+a.class+' '+a.age+' '+a.place)
// a.reset1
// console.log(a.name+'  '+a.class+' '+a.age+' '+a.place)

per=
{
name:'thanu',
place:'chalippadam',
age:12,
full_name:()=>{
return per.name+' '+per.place;   //if we using arraow function cant use this.full_name:function (){ return this.name+' '+this.place;
}
};
// console.log(per.name)
// console.log(per.place)
// delete(per.name)
// console.log(per.name)
// console.log(per)
// console.log(per.full_name())

// per.age_place=function()
// {
//     return this.age+' '+this.place;
// }
// console.log(per.age_place())

var my=Object.values(per)
// console.log(my)
// per.full_name=per.full_name.toString()
// console.log(JSON.stringify(per))

// a ={
//     name:'thanseer',
//     class:'',
//     age:21,
//     set cls(cl)
//     {
//         this.class=cl;
//     },
//     get agee()
//     {
//         this.age+=10;
//     }
// }
// console.log(a.name);
// console.log(a.age);
// a.cls="ct";
// console.log(a.class);
// a.agee
// console.log(a.age);

// a.mark=45;
// console.log(a.mark);
// a.nmcls=function() {
// return this.name+" "+this.class;
// }
// console.log(a.nmcls());

// Object.defineProperty(a,"chname",{
//     set:(chn)=>
//     {
//         a.name=chn
//     }
// })
// a.chname="thanu"
// console.log(a.name);
// console.log(a)
// a.place="edavanna";
// console.log(a.place)
// b=a;
// console.log(b)

// person =function(name,age,place)
// {
// this.name=name;
// this.age=age;
// this.place=place;
// }
// p=new person('thanu',22,'edavanna')
// q=new person("sanu",23,'chalippadam')
// console.log(q.name)
// console.log(p.name)
// p.mark=0;
// person.name='thanseer'
// console.log(p.mark)
// console.log(q.mark)
// console.log(q.name)

// person=
// {
//     name:'thanu',
//     age:21,
//     place:'chalippadam',
//     mark:380
// }
// console.log(person)
// a=person
// person.grade="a"
// console.log(person)
// console.log(a)

// blueprint=function(name,age,place)
// {
//     this.name=name;
//     this.age=age;
//     this.place=place;
// }
// console.log(blueprint)
// person1=new blueprint('thanu',21,'chalippadam')

// blueprint.grade="a"
// person1.grade="a"
// console.log(blueprint)
// console.log(person1)
// person2=person1;
// console.log(person2)

// a='ab'
// try{
//     if (a=="abcd")
//     throw "yes it is abcd"
//     else if(a==ab)
//     throw "yes it is ab"
// }
// catch(ech)
// {
//     console.log(ech.)
// }

// person={
// fname:"thanseer",
// sname:"thanu",
// get name()
// {
// return this.fname+" "+this.sname;
// }
// }
// console.log(person.name)
// a=person
// person.age=20
// console.log(person)
// console.log(a)
// a.place="chalippadam"
// console.log(a)
// console.log(person)
// a.fname="thanu"
// console.log(person.fname)
// console.log(a.fname)
// var x=Object.keys(person)
// var y=Object.values(person)
// console.log(x)
// console.log(y)
// console.log(JSON.stringify(person))
// console.log(a)
// console.log(person)
// Object.defineProperty(person,"ch_fname",{
//     set:function(name){this.fname=name}
// })
// person.ch_fname="sanu"
// console.log( a.name)
// console.log(person.name)
// person.age=10
// console.log(person.age)
// console.log(a.age)

// function Abc(n,a,p)
// {
//     this.n=n;
//     this.a=a;
//     this.p=p;
// }
// fo=new Abc("thanu",21,"malappuram")
// so=new Abc("vava",20,"calicut")
// console.log(so)
// console.log(Abc)
// console.log(fo.n)
// console.log(so.n)
// Abc.m=20
// console.log(Abc.m)
// console.log(fo.m)
// console.log(so.m)
// fo.g="a"
// console.log(fo.g)
// console.log(fo)
// console.log(Abc)
// console.log(so)

// function person(name,age,place)
// {
//     this.name=name;
//     this.age=age;
//     this.place=place;
// }
// person.prototype.name_place=function (){return this.name+" "+this.place}
// x=new person("thanseer",21,"malappuram")
// y=new person("roopesh",20,"calicut")
// console.log(x.name_place())
// console.log(y.name_place())

// (()=>  //function()
// {
//     console.log("hello")
// })()

// var a=(x,y)=>{return x*y}
// var b=(x,y)=> x * y;
// console.log(a(5,10))
// console.log(b(5,10))

// abc()
// function abc()
// {
//     console.log("hello world");
// }

// x=(a,b=10)=>{return a*b}
// console.log(x(5))
// console.log(x(5,4))

// function findmax()
// {
//     max=-Infinity
//     for(i=0;i<arguments.length;i++)
//     {
//         if(arguments[i]>max)
//         max=arguments[i]
//     }
// if(max!=-Infinity)
// return max;
// }
// console.log(findmax())
// console.log(findmax(2))
// console.log(findmax(2,4))
// console.log(findmax(10,2,25))

// var x=
// {
//     full:function()
//     {
//        return  this.name+" "+this.place
//     }
// }
// var y=
// {
//     name:"thanseer",
//     place:"chalippadam",
// }
// console.log(x.full.call(y))

// person2=
// {
// first_name:'thanseer',
// second_name:"thanu",
// }

// person1=
// {
// full:function ()
// {
//   return this.first_name+" "+this.second_name;
// }}
// console.log(person1.full.call(person2))

// function abc(a,b,c)
// {
// console.log(arguments[0]);
// console.log(arguments[1]);
// console.log(arguments);
// }
// abc(1,2);

// function aa(){
// var a=document.querySelectorAll("input")[0].value;
// var b=document.querySelectorAll("input")[1].value;
// x=setInterval(() => {
//     console.log(a)
//     a++
//   if(a>b)
//   clearInterval(x)
// }, 1000);
// }

// var a={

//     name:"thanseer",
//     place:"chalippadam",
// };
// console.log(a)
// console.log(a.name)
// b=a;
// console.log(b)
// b.mark=20;
// console.log(b)
// a.mark=50;
// console.log(a)
// c=a;
// console.log(c)

// var a={

//     name:'thanu',
//     place:'edavanna',
//     age:21,
// };
// b=a;
// b.name="sanu"
// console.log(b.name)
// a.mark=45;
// console.log(a.mark)
// console.log(b.mark)
// a.nameplace=function()
// {
// return this.name+" "+this.place
// }
// b.name="sanuq"
// a.name="sasd"
// console.log(a.nameplace())
// console.log(b.nameplace())
// c=b
// console.log(a.name);
// a.name="thanseer";
// console.log(a,b,c);

// var student=
// {
//     name:"thanseer",
//     place:"edvanna",
//     age:21,
// }
// // console.log(Object.values(student))
// // console.log(Object.keys(student))

// var person1=new Object(student)
// var person2=new Object(student)
// student.mark=45;
// person1.add="koraliyadan";
// console.log(student.mark)
// console.log(person1.mark)
// console.log(person2.mark)
// console.log(person1.add)
// console.log(person2.add)
// person1.nameplace=()=>{return this.name+" "+this.place}
// console.log(person1)
// console.log(person2)
// console.log(student)
// delete person1.nameplace
// console.log(person1)
// console.log(person2)
// console.log(student)

// function person(name,place,age)
// {
// this.n=name
// this.p=place
// this.a=age;
// }
// var a=new person("thanseer","chalippadam",22)
// var b=new person("amruth","noonjikkara",21)
// console.log(a)
// console.log(b)
// a.n="snau"
// a.m=45
// console.log(a)
// console.log(b)

// function person(name,place,age)
// {
// this.n=name
// this.p=place
// this.a=age;
// }
// var a=new person("thanseer","chalippadam",22)
// var b=new person("amruth","noonjikkara",21)
// console.log(a)
// console.log(b)
// a.n="snau"
// a.m=45
// console.log(a)
// console.log(b)

// arr=[1,2,3,4,5,6]
// t=0;
// sum2 =function(a,b,c)
// {
// for(i=0;i<arguments.length;i++)
// t+=arguments[i]
// return t
// }
// console.log(sum2(1,2,3,4,5,6))
// console.log(sum2.apply(arr))

// for(i=1;i<5;i++)
// {
// for(j=1;j<=i;j++)
// document.write("*\t")
// document.write("<br>")
// }

// console.log("hello hi ")

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

// addpost=(n,result)=>
// {
//     setTimeout(() => {
//         post.push(n)
//         result()
//     }, 2000);

// }

// addpost({id:3,item:"third comment"},getpost)

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
//     return 40
// }).then((pro)=>{console.log(pro)
//     return div(pro,10)
// }).then((ans)=>{console.log(ans)})
// .catch(()=>{
// })
//     console.log('one is zero')




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
// abc()
// xyz()



