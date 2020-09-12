function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:

    var c = a;
    a = b;
    b = c;

/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

/**************************************************/

var name = prompt("What is your name?:");

var firstChar = name.slice(0,1);

var upperCaseFirstChar =firstChar.toUpperCase ();

var restOfName = name.slice(1, name.length);

restOfName = restOfName.toLowerCase();

var capitalisedName = upperCaseFirstChar + restOfName;

alert("Hello," + capitalisedName)

/**************************************************/