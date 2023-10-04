function scuberGreetingForFeet(feet){
//  switch (feet) {
//   case feet > 2500 :
//  console.log ("No can do");
//   break ;
//   case (feet > 2000):
//    console.log("I will gladly take your thiry bucks")
//   break ;
//   case (feet <= 400) :
//    console.log("This one is on me!")
//    break ;
//    default:
//     console.log("How many feet would you like to fly today?")
//   return feet ;
//  }

  if (feet <= 400) {
    return 'This one is on me!' }
  else if (feet >= 2000 && feet <=2499){
    return 'I will gladly take your thirty bucks.'}
  else if (feet >=2500){
    return 'No can do.'
  }
}

scuberGreetingForFeet(450);

function ternaryCheckCity(city){
 if (city === 'NYC'){
  return "Ok, sounds good."
 } else if (city !== 'NYC')
 return "No go."
}

ternaryCheckCity();

function switchOnCharmFromTip(tip){
  if (tip === 'generous'){
  return "Thank you so much." }
  else if (tip == 'not as generous'){
  return "Thank you." }
  else return "Bye."

}

ternaryCheckCity() ;