console.log("Hello World!\n==========\n");
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
   
    if (count < 0) {
        console.log("needs to me positive");
        return; 
    }

    for (let i = 1; i <= count; i++) {
       
        if (i % 2 !== 0) {
            console.log(i); 
        }
    }
}
printOdds(100);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
checkAge("me", 18);
function checkAge(userName, age)
{
userName = userName || "User";
age = age || 0;
let sixteen = 'you can drive';
let notSixteen = 'you cant drive';
if (age >= 16)
{
    console.log(sixteen);
}
else
{
    console.log(notSixteen);
}
}

function locatePoint(x, y) {
    if(x === 0 && y !==0)
    {
        console.log(`${x}, ${y} is on y`);
    }
    else if(y === 0 && x !== 0)
    {
        console.log(`${x}, ${y} is on x`);
    }
    else if(y === 0 && x ===0)
    {
        console.log(`${x}, ${y} is on origin` );
    }
    
    if(x > 0 && y > 0)
    {
        console.log(`${x}, ${y} quadrent 1` )
    }
    else if(x < 0 && y > 0)
    {
        console.log(`${x}, ${y} quadrent 2`)
    }
    else if(x < 0 && y < 0)
    {
         console.log(`${x}, ${y} quadrent 3`)
    }
   else if(x > 0 && y < 0)
   {
    console.log(`${x}, ${y} quadrent 4`)
   }   
}
locatePoint(2,5)
function triType(side1, side2, side3) {

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "bad triangle";
    } else {
      
        if (side1 === side2 && side2 === side3) {
            return "Equilateral triangle";
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            return "Isosceles triangle";
        } else {
            return "Scalene triangle";
        }
    }
}
console.log(triType(3, 5, 6));
function dataUsage(planLimit, day, usage)
{
    const planDays = 30;
    const daysRemaining = planDays - day;
    const averageDailyUse = usage / day; // Corrected to `averageDailyUse` for consistency
    const planDailyLimit = planLimit / planDays; // Use `planDailyLimit` consistently
    const dataLeft = planLimit - usage; // Corrected to `dataLeft` for clarity
    const averageDailyRemaining = daysRemaining > 0 ? dataLeft / daysRemaining : 0; // Use `dataLeft` and `daysRemaining`

    let message;
    if (usage > planLimit) {
        message = `${day} days used, ${daysRemaining} days remaining\n` +
                  `Average daily use: ${averageDailyUse.toFixed(3)} GB/day\n` +
                  "You've RUN OUT of your data plan.";
    } else if (averageDailyUse > planDailyLimit) {
        const exceedBy = (averageDailyUse * planDays) - planLimit; // Corrected to use `planDays`
        message = `${day} days used, ${daysRemaining} days remaining\n` +
                  `Average daily use: ${averageDailyUse.toFixed(3)} GB/day\n` +
                  `You are EXCEEDING your average daily use (${planDailyLimit.toFixed(2)} GB/day), ` +
                  `continuing this high usage, you'll exceed your data plan by ` +
                  `${exceedBy.toFixed(1)} GB.\n` +
                  `To stay below your data plan, use no more than ${averageDailyRemaining.toFixed(2)} GB/day.`;
    } else if (averageDailyUse < planDailyLimit) {
        message = `${day} days used, ${daysRemaining} days remaining\n` +
                  `Average daily use: ${averageDailyUse.toFixed(3)} GB/day\n` +
                  "You are UNDER your average daily use, " +
                  `you can use up to ${averageDailyRemaining.toFixed(2)} GB/day for the rest of the period.`;
    } else { // Exactly on target
        message = `${day} days used, ${daysRemaining} days remaining\n` +
                  `Average daily use: ${averageDailyUse.toFixed(3)} GB/day\n` +
                  "You are RIGHT ON TRACK with your data usage.";
    }

    console.log(message);
}

dataUsage(100, 15, 56); // Example usage
