var userName = 'Jane';
const userQuestion = 'What question would you like to ask?'

if (userName === 'Jane')
{
    console.log(`Hello, ${userName}!`);
}

console.log(userQuestion + " " + userName);

let randomNumber = Math.floor(Math.random() * 8);
let eightball = '';

switch (randomNumber)
{
  case 0:
    eightball = 'Reply hazy try again'
    break;
  case 1:
    eightball = 'It is certain';
    break;
  case 2:
    eightball = 'It is decidely so';
    break;
  case 3:
    eightball = 'Cannot predict now';
    break;
  case 4:
    eightball = 'Do not count on it';
    break;
  case 5:
    eightball = 'My sources say no';
    break;
  case 6:
    eightball = 'Outlook not so good';
    break;
  case 7:
    eightball = 'Signs point to yes';
    break;
}

console.log(eightball);
