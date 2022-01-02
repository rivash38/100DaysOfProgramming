let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
let runnerAge = 15;

if (registeredEarly && runnerAge >= 18)
{
    raceNumber += 1000;
}

if (registeredEarly && runnerAge >= 18)
{
    console.log('Number: ' + raceNumber + '\nYour race shall begin at 9:30AM');
}
else if (!registeredEarly && runnerAge >= 18)
{
   console.log('Number: ' + raceNumber + '\nYour race shall begin at 11:00AM');
}
else if (runnerAge < 18)
{
  console.log('Number: ' + raceNumber + '\nYouth registrants run at 12:30PM');
}
