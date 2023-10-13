// let or var diffrence
var z=5;

if (true)
{
    let y=6; 
    

}
console.log(z);
//console.log(y); // not possible beacuse it is run only inside the bracket


//constants
 const num=12;
 console.log(num);


 let lastName='omi';
 console.log(lastName);
 
 lastName=5;
 console.log(lastName++);

 // increment decrement 
 let a=7;
 console.log(++a);
 let b=7;
 console.log('b=',b++);
 console.log(b);
 let c=7;
 console.log(--c);    
 let d=7;
 console.log(d--);
console.log(d);

//comparison operatorer
console.log(a==b);
let str=7;
console.log(str===d);

let age=15;
let staTus=(age>=18)?'i can vote':'i cannot vote';
console.log(staTus);

console.log(false && true);
console.log(false || true);

let h=45;
let x=3;
console.log(h|x);

// condition statment

if(h>=90)
{
    console.log('king kong');
}
else if(h>=80)
{
    console.log('chal mere bhai');
}
else if(h>=50)
{
    console.log('nko mere bhai');
}
else
{
    console.log('chal jhutte')
}

let sum = 5;
switch(sum){
    case 1:console.log('a');
    break;
    case 2:console.log('b');
    break;
    case 3:console.log('c');
    break;
    case 4:console.log('d');
    break;
    default:console.log('e');
}

// loop
for(let i=1; i<=5; i++){
    console.log(i);
};

let i=0;
while(i<10){
    console.log(i);
    i++;
}

y=11;
do{
    console.log(y);
    y++;
}while(y<20);
