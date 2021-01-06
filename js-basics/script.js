var massJohn, massMark, heightJohn, heightMark, calBmiJohn, calBmiMark, compareBmi;
massJohn = 95;
massMark = 80;
heightJohn = 155.45;
heightMark = 157;

calBmiJohn = massJohn / heightJohn^2;
calBmiMark = massMark / heightMark^2;

compareBmi = calBmiJohn > calBmiMark; 

console.log('Is Marks BMI higher than john?' + ' ' + compareBmi);

// Ternary operator
var firstname = 'John';
var age = 14;
 age >= 18 ? console.log(firstname + '' + 'drinks beer') : console.log(firstname + ' ' + 'drinks juice');

 var drink = age > 20 ? 'beer' : 'juice';
 console.log(drink);

 //switch
 var job = 'teacher';
 switch(job){
 	case 'teacher':
 	console.log('teaches javascript');
 	break;
 	case 'designer':
 	console.log('drives an uber in Canada');
 	break;
 	default:
 	console.log('default work');
 	break;
 }
 