//var a=['a','b','c',1,2];
// var b=a;
// document.write(a+'\n');

// document.write(b+"\n");
// a.pop();
// a.push(15);
// a.push("aaa");
// document.write(a);
// document.write(a.length);
// a.shift();
// document.write(a.sort());





// function lol()
// {
// var a=0;
//     while(a<10)
//     {
//    document.write("<br> <hr>"+a);
//         a++
//     }
// }



// var a=
// {
//     name:'thanseer',
//     age:20,
//     place:'edavanna'
// }
// var b=['thanu',123,'sanu'];
// document.write(b);
// document.write("<br>");
// // document.write(b[1]);
// b.pop();
// document.write(b);
// b.push("chali");
// document.write("<br>");
// document.write(b);
// b.shift();
// document.write("<br>");
// document.write(b);
// document.write("<br>");
// b.unshift("ajeesh");
// document.write(b);




// const numbers=new Array(1,2,3,4,5);
// console.log(number)





// var details={
//     first_name:"thanseer",
//     second_name:"thanu",
//     place:"chalippadam",
//     fullname: function()
//     {
//         return first_name+" "+this.second_name; 
//     }
// };
// document.getElementById("pp").innerHTML=details.fullname();



// a=52456000;
// while(a>0)
// {  
//     d=a%10;
//     a=Math.floor((a/10));
    
// switch(d)
// {
//     case 0:
//         {
//         document.write("zero ");
//         break;
//         }
//     case 1:
//         {
//           document.write("one ");
//           break;
//          }
//     case 2:
//          {
//          document.write("two ");
//          break;
//         }                    
//     case 3:
//       {
//         document.write("three ");
//         break;
//         }
//     case 4:
//         {
//         document.write("four ");
//         break;
//         }
//     case 5:
//         {
//         document.write("five ");
//         break;
//         }
//         case 6:
//         {
//         document.write("six ");
//         break;
//         }  
//         case 7:
//             {
//             document.write("seven ");
//             break;
//             }
//             case 8:
//                 {
//                 document.write("eight ");
//                 break;
//                 }
//                 case 9:
//                     {
//                     document.write("nine ");
//                     break;
//                     }
// }
// }








// function sub()
// {
//   document.getElementById('pp').value="";
//   a=document.getElementById('lol').value;
// // while(a>0)
// // {  
// //     d=Math.floor(a/Math.pow(10,a.toString().length-1));
// //     a=a%Math.pow(10,a.toString().length-1);
// for(i=0;i<a.length;i++)
// {
// d=Number(a[i])
// switch(d)
// {
//     case 0:
//         {
// document.getElementById('pp').value=document.getElementById('pp').value+"zero ";
//         break;
//         }
//     case 1:
//         {    
//             document.getElementById('pp').value=document.getElementById('pp').value+"one ";
//           break;
//          }
//     case 2:
//          {
//             document.getElementById('pp').value=document.getElementById('pp').value+"two ";
//          break;
//         }                    
//     case 3:
//       {
//         document.getElementById('pp').value= document.getElementById('pp').value+"three ";
//         break;
//         }
//     case 4:
//         {
//             document.getElementById('pp').value=document.getElementById('pp').value+"four ";
//         break;
//         }
//     case 5:
//         {
//             document.getElementById('pp').value=document.getElementById('pp').value+'five ';
//         break;
//         }
//         case 6:
//         {
//             document.getElementById('pp').value=document.getElementById('pp').value+"six ";
//         break;
//         }  
//         case 7:
//             {
//                 document.getElementById('pp').value=document.getElementById('pp').value+"seven ";
//             break;
//             }
//             case 8:
//                 {     
//                     document.getElementById('pp').value=document.getElementById('pp').value+"eight ";
//                 break;
//                 }
//         case 9:
//                     {           
//                         document.getElementById('pp').value=document.getElementById('pp').value+"nine ";
//                     break;
//                 }
// default:
//     document.getElementById('pp').value=document.getElementById('pp').value+" "+a[i];


// }
// }
// }






// function numb()
// {
//     document.getElementById("pp").value=document.getElementById("lol").value;
// }
// function sub()
// {
//     document.getElementById("pp").value=parseInt(document.getElementById("pp").value,10)+10;
// }




// a=0;
// while(true)
// {
//     document.write(a+"<br>");
//     if(a>9)
//     break;
//     a++;
// }





// var b=0;
// a=[1,2,3,4,5,6]
// a.forEach(function(value,index)
// {
// b=b+value;
// })
// document.write(b);






// function abc()
// {
//     var x=20;
//     function xyz()
//     {
//         alert(x+5);
//     }
// }
// abc().xyz();







// function abc()
// {
//     this.x=10
//     this.y=40;
//    this.dis=function()
//     {
//         alert(this.x+this.y);
//     }
// // this.dis();
// }
// var obj=new abc();
// // obj.dis();
// document.write(obj.x);







// function lol()
// {
// var m=document.querySelector("input").value;
// console.log(m);
// }

// function key(a)
// {
// console.log(a.value);
// }





// a=0;  
// function press()
// {
// a+=1;
// document.getElementById('pr').innerHTML=a;
// }



// var a=0
// document.querySelector("button").addEventListener("click",function()
// {
// a++
// document.querySelector("h1").innerHTML=a;
// });





// var i=0;
// x=setInterval(function()
// {
//  document.getElementById('time').innerHTML+='t';
// i++;
// if(i>10)
// clearInterval(x);
// },1000)




// var i=10;
// function aaa()
// {
// setTimeout(function()  {
//     i--;
//     document.querySelector('#time').innerHTML+='# ';
//     if(i>0)
//     aaa();
// }, 1000);
// }
// aaa();





// document.getElementById('box').addEventListener('keypress',function()
// {
//     console.log(document.querySelector('input').value);
// })



  


    // document.querySelector("button").addEventListener('click',function()
    // {
    // document.getElementById('min').innerHTML='00';
    // document.getElementById('sec').innerHTML='00';
    // document.getElementById('m-sec').innerHTML='00';
    // setInterval(function(){
    //     if(document.getElementById('m-sec').innerHTML<60)
    //     {
    //         document.getElementById('m-sec').innerHTML=Math.floor(document.getElementById('m-sec').innerHTML)+1;
    //     }
    //    else if(document.getElementById('sec').innerHTML<60)
    //     {
    //         document.getElementById('m-sec').innerHTML=0;
    //         document.getElementById('sec').innerHTML=Math.floor(document.getElementById('sec').innerHTML)+1;
    //     }
    // else if(document.getElementById('min').innerHTML<2)
    // {
    //     document.getElementById('sec').innerHTML=0;
    //     document.getElementById('min').innerHTML=Math.floor(document.getElementById('min').innerHTML)+1;
    // }
    // else
    // {
    //     document.getElementById('m-sec').innerHTML=0;
    //     document.getElementById('sec').innerHTML=0;
    //     document.getElementById('min').innerHTML=0;
    // }
    // },01);
    // })







// var a=['a','b','c','d'];
// l=a.length;

// for(var i=0;i<l;i++)
// {
// document.write('<option>'+a[i]+'</option>');
// }







// var a=['a','b','c','d'];
// l=a.length;
// var op='<select>'
// for(var i=0;i<l;i++)
// {
// op=op+'<option>'+a[i]+'</option>';
// }
// op=op+'</selcect>'
// document.write(op);






// var a=['a','b','c','d'];
// l=a.length;
// var op='<ul>'
// for(var i=0;i<l;i++)
// {
// op=op+'<li>'+a[i]+'</li>';
// }
// op=op+'</ul>'
// document.write(op);







// var fruits, text;
// fruits = ["Banana", "Orange", "Apple", "Mango"];
// text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";
// document.write(text);
// function myFunction(itvem) {
//   text += "<li>" + itvem +"</li>";
// }







// a='thenseer';
// document.write(a.slice(2,5));
// document.write(a.replace('e','z'));






// var this=
// {
//     name:'thanseer',
//     place:'edavanna',
//     age:30,
//     mark:'85/100',
//     details:function()
//     {
//         return this.name+'\n'+this.place; //this or this;
//     }
// };
// document.write(this.details());






// var b=['1','2','3']
// var a='<ul>';
// b.forEach(setup);
// a+='</ul>'
// function setup(value)
// {
//     value=parseInt(value);
//     a+='<li>'+(value+2),'</li>';
// }
// document.write(a);







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





// var a=Number('12')
// var b=12
// document.write(a===b);





// var a=[1,2,3,4,5,6];
// var b=a.splice(4,);
// console.log(a);
// console.log(b);






// var a=[1,2,3,4,5];
// var b=a.map(function(k)
// {
//     return k;
// })
// console.log(b);








// var people=
// [
//     {
//         name:'thanseer',
//         place:'edavanna',
//         age:30,
//         mark:'85/100',
//         details:function()
//         {
//             return this.name+'\n'+this.place; //student or this;
//         }
//     },
//     {
//         name:'ajeesh',
//         place:'kundotty',
//         age:27,
//         mark:'93/100',
//         details:function()
//         {
//             return this.name+'\n'+this.place; //student or this;
//         }
//     },    
//     {
//         name:'amruthraj',
//         place:'vazhakkad',
//         age:29,
//         mark:'75/100',
//         details:function()
//         {
//             return this.name+'\n'+this.place; //student or this;
//         }
//     },
// ]



// // var a=people.map(function(d)
// // {  
// //      document.write(d.name+'<br>'); 
// // })



// var fill=people.filter(function(a)     //filter is return array which satisfy the given condition;
// {
//  return a.age >20;
// })
// console.log(fill);



// var fin=people.find(function(a)
// {
//  return a.name=='thanseer';         //find is return array's element which satisfy the given codition;
// })
// console.log(fin);



// // var a=people.map(function(d)
// // {  
// //      document.write(d.name+'<br>');     //map is just iterating the all elements of an array;
// //      if (d.age==27)
// //      {
// //          document.write(d.name+' is 27 year old<br>');
// //      }
// // })






// setInterval(function(){
// var a= new Date();
// document.querySelector('h1').innerHTML=a.getSeconds();
// },1000);





// function aa()
// {
// setTimeout(()=>{
// var a= new Date();
// document.querySelector('h1').innerHTML=a.getSeconds();
// aa();
// },5000);
// }
// aa();





// var a=document.getElementsByTagName('li')
// var b=[...a];
// b[1].style.color='red';
// a[0].style.color='blue';             //both a and b can use, i dont know the difference of between them








 