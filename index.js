const messages = [];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    debugger;
  }
  return messages;
}


function countDown(positiveInteger) {
  let i = positiveInteger;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}