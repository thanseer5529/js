//////////////////////////////       string_methods      //////////////////////////////








// var a='abcdefghijkl';

// console.log(a.length);



// console.log(a.startsWith('a'))

// console.log(a.startsWith('b'))



// console.log(a.endsWith('l'))

// console.log(a.endsWith('r'))



// console.log(a.padEnd(16,1))

// console.log(a.padEnd(16,'AW'))

// console.log(a.padEnd(20,'A'))

// console.log(a.padEnd(20,45))




// console.log(a.padStart(16,1))

// console.log(a.padStart(16,'AW'))

// console.log(a.padStart(20,'A'))

// console.log(a.padStart(20,45))





// console.log(a.slice(0,4))

// console.log(a.slice(0))

// console.log(a.slice(5))

// console.log(a.slice(0,-8))

// console.log(a.slice(4,-4))

// console.log(a.slice(-8,-2))

// console.log(a.slice(-10,5))





// console.log(a.substr(-10,2))

// console.log(a.substr(-10,5))

// console.log(a.substr(10,2))

// console.log(a.substr(0,5))

// console.log(a.substr(2,5))






// console.log(a.split(''))






// var b='abcdabcdabcd';

// console.log(b.indexOf('a'))

// console.log(b.indexOf('b'))

// console.log(b.indexOf('ewq'))

// console.log(b.indexOf('a',5))

// console.log(b.indexOf('d',10))

// console.log(b.indexOf('d',-12))

// console.log(b.indexOf('c',-2))




// console.log(b.lastIndexOf('d'));

// console.log(b.lastIndexOf('a'));

// console.log(b.lastIndexOf('b'));

// console.log(b.lastIndexOf('d',8));





//  var k='thanseer thanu,thanu from chalippadam,thanu';
//  var l='THANSEER KORALIYADAN';

// console.log(k.replace('thanu','sanu'));

// console.log(k.replace(/THANU/i,'sanu'));

// console.log(k.replace(/thanu/g,'sanu'));

// console.log(k.replace(/THANU/ig,'sanu'));






// console.log(k.toUpperCase());

// console.log(l.toLowerCase());





// var p='abc';var q='pqr';
// console.log(p.concat(q));





// console.log(a.charAt(5))

// console.log(a.charCodeAt(0));





// var str = "a,b,c,d,e,f";
// var arr = str.split(",");
// console.log(arr);








































//////////////////////////////       number_methods      //////////////////////////////





// var a=12e2;

// var b=12e-5;

// console.log(a,b);





// var a=456

// console.log(a.toString(2))

// console.log(a.toString(10))

// console.log(a.toString(16))




// var a=12.123456789;

// var b=12.987654321;

// console.log(a.toFixed(0));

// console.log(a.toFixed(3));

// console.log(b.toFixed(0));

// console.log(b.toFixed(2));





// a='456';

// console.log(Number(a))

// console.log(typeof(Number(a)))





// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);












































//////////////////////////////       array_methods      //////////////////////////////





//  var a=[160,2,3,4,5,'a',123,'abc'];

// console.log(a.length)

// console.log(a[0])

// a.push('thanu');

// console.log(a);

// a.pop()

// console.log(a);

// a.shift();

// console.log(a);

// a.unshift('thanseer')

// console.log(a);

// console.log(a instanceof Array)




// c='';
// a.filter(function (b)
// {
// if (typeof(b)=='string')
// c+=b;
// })
// console.log(c);




// var arr=[1,2,3,4,5,6]

// console.log(arr.filter(function (a)
// {
// return a%2==0
// }))

// console.log(arr.find(function(a)
// {
// return a==2
// }))


// console.log(arr.map(function(a)
// {
// return a%2==0
// }))

// console.log(arr.forEach(function(a)
//{
// document.write(a%2==0,'  ')
// }))







// var a=['abc','bcd','cde','def','efg'];

// console.log(a)

// a.splice(3,0,'thanu')

// console.log(a)


// a=1;
// setInterval(function()
// {
// console.log(a)
// a++
// },5
// )