/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
// create a variable for jon and Jamie's attack strength
let jonSnowAttack = 25 ;
let jamieLannisterAttack =  45;

if (jonSnowAttack > jamieLannisterAttack)
{
    console.log("Jon Snow has better attack than Jamie");
}
else if (jamieLannisterAttack>jonSnowAttack){
console.log("Jamie has better attack than Jon");
}
else {
    console.log("Jon and Jamie have the same attack");
}


// Jamie, knowing he is superior, initiates a fight with jon. Lets create some addtions

let jonSnowHealth = 100 ;
let jonSnowDefence =  0;

// Jamie attacks first - use an if else to determine iff Jon Snow can survive the attack. if he does not console.log " Jon snow has be slain". Otherwise , log jon Snow's Health

if(jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon Snow has been slained");
} else {
    jonSnowHealth -= jamieLannisterAttack ;
    console.log(`Jons Snow's health is down ${jonSnowHealth}`);
    
}

jonSnowDefence += 25;
// Jamie attacks again - use an if/else to determine if Jon Snow can survive the attack. Make sure to account for Jon's defense. If he does not, console.log "Jon Snow has been slain." Otherwise, console.log Jon Snow's health.

if(jonSnowHealth <= jamieLannisterAttack-jonSnowDefence){
    console.log("Jon Snow has been slained");
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefence) ;
    console.log(`Jons Snow's health is down ${jonSnowHealth}`);
    
}

// One of the town's people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise Jon's health by 50pts. However,
// Jon's health cannot exceed 100. Using an if else statement, raise Jon's health to the appropriate level.
if((jonSnowHealth+50)>=100){

    jonSnowHealth = 100;
}
else
{
    jonSnowHealth += 50 ; 

}
console.log(jonSnowHealth);


// Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, he will aim to take Jon's head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).

let coinLandsHeads  =  false ;

// if(coinLandsHeads === true ){
//     console.log(`The fight continues `);
// }
// else {
//     console.log(`jon is allowed to run away`);
// }


//  use !== to accomplish the same thing

if(coinLandsHeads !== false ){
    console.log(`The fight continues `);
}
else {
    console.log(`jon is allowed to run away`);
}

// for loops

// for(let i = 0; i < 5; i++)
// {
  
//     jonSnowHealth -= (jamieLannisterAttack - jonSnowDefence) ;
    
//     if(jonSnowHealth <=0){
//         console.log(`Jon has been slain`);
//     }else 
//     {
//     console.log(`Jon Snow 's health is ${jonSnowHealth}`);
//     }
// }

while(jonSnowHealth > 0)
{
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefence) ;
    console.log(`Jon Snow 's health is ${jonSnowHealth}`);
    if(jonSnowHealth <=0){
        console.log(`Jon has been slain`);
    }
}
