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

dogAge = prompt("how old is your Dog?:")

var humanAge = (((dogAge -2) * 4) + 21);

alert("Your dog is " + humanAge + "years old is human years")

/**************************************************/

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    var numberOfBottles = math.floor(money / 1.5);

    console.log("buy"+ numberOfBottles + "bottles of Milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  function getMilk (bottles) {
      var cost = bottles * 1.5;
  }

  getMilk(2);

  
/**************************************************/

function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        
        var yearsRemaining = 90 - age;
        var days = yearsRemaining * 365;
        var weeks = yearsRemaining * 52;      
        var months = yearsRemaining * 12;            
        
        console.log("You have " + days + "day," + weeks + "weeks, and" + months + "months left.")

    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(12);

    /**************************************************/

    function getMilk(money, costPerBottles) {   
        console.log("leaveHouse");
        console.log("moveRight");
        console.log("moveRight");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveRight");
        console.log("moveRight");
    
        var numberOfBottles = math.floor(money / costPerBootles);
    
        console.log("buy"+ numberOfBottles + "bottles of Milk");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("enterHouse");
        return calcchange (money, 2.5);
      }

    function calcBottles(startingMoney, costPerBolltes) {
        var numberOfBottles = Math.floor(startingMoney /costPerBolltes);
        return numberOfBottles;
    }

    function calcChange(startingMoney, costPerBolltes) {
        var change = Math.floor(startingMoney % costPerBolltes);
        return change;
    }

    console.log("Hello Master, here is your" + getMilk(5, 1.5) + "Change.");

/**************************************************/

     //Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight , height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

bmi should equal 20 when it's rounded to the nearest whole number.
*/

/**************************************************/

prompt("What is your name?: ")
prompt("What is their name?: ")

var lowerScore = Math.random() * 100;
lowerScore = Math.floor(lowerScore) + 1;

alert("Your love score is " + loveScore);

/**************************************************/

prompt("What is your name?: ")
prompt("What is their name?: ")

var lowerScore = Math.random() * 100;
lowerScore = Math.floor(lowerScore) + 1;

if (lowerScore > 70) {

    alert("Your love score is " + loveScore + "%" + "Your love each other like kanye loves kaye");

} else {
    alert("Your love score is " + loveScore + "%");
}

/**************************************************/

prompt("What is your name?: ")
prompt("What is their name?: ")

var lowerScore = Math.random() * 100;
lowerScore = Math.floor(lowerScore) + 1;

if (lowerScore > 70) {

    alert("Your love score is " + loveScore + "%" + "Your love each other like kanye loves kaye");
}
if (lowerScore > 30 && lowerScore <=70) {

    alert("Your love score is " + loveScore + "%");
} 

if (lowerScore <= 30) {

    alert("Your love score is " + loveScore + "%" + "You go together like oil and Water");

}

/**************************************************/

function bmiCalculator (weight, height) {

    var bmi = weight / (height * height);

    if (bmi < 18.5) {
        alert("So you are underweight " + bmi );
    }

    if (bmi > 18.5 && bmi <= 24.9) {
        alert("So you have a normal weight " + bmi );
    }

    if (bmi > 24.9) {
        alert("So you are overweight " + bmi );
    }

    return interpretation;
}

/**************************************************/

function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
    
        if (year % 4 === 0) {
            if (year % 100 == 0) {
                if (year % 400 === 0) {
                    return "Leap Year"
                }
            } else {
                return "Not leap Year"
            }
        } else {
            return "Leap Year";
        } else {
            return "Not leap Year";
        }
    
    /**************Don't change the code below****************/    
    
    }

    /**************************************************/

    var guestList = ["Angela", "Jack", "Pan", "Ana", "Laura", "Jason"];

    var guestName = ("What is your Name?: ")

    if (guestList.includes(guestName)) {
        alert("Welcome!");
    } else {
        alert("Sorry, Maybe Next Time.!!");
    }

    /**************************************************/

    