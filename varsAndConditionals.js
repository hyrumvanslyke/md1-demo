/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Pikachu and
   Onix.
*/ 

let pikachuAttack = 25
let onixAttack = 35

if( pikachuAttack > onixAttack){
    console.log("Pikachu is stronger")
}else if(onixAttack > pikachuAttack){
    console.log("Onix is stronger than Pikachu")
} else("They are evenly matched, this will be a good battle")

let pikachuHealth = 100
let pikachuDefense = 0

if(pikachuHealth <= onixAttack){
    console.log("Pikachu has fainted, the battle is over")
}else{
    pikachuHealth -= onixAttack
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

pikachuDefense += 25

if(pikachuHealth <= onixAttack - pikachuDefense){
    console.log("Pikachu has fainted, the battle is over")
}else {
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

if((pikachuHealth + 50) >= 100){
    pikachuHealth = 100
}else{
    pikachuHealth += 50
}
console.log(`Pikachu was healed, his health is now ${pikachuHealth}.`)

let hitIronTail = true

if(hitIronTail === false){
    console.log("Onix missed iron tail so it gave up and fled the battle.")
}else{
    console.log("The battle continues")
}

for(let i = 0; i < 5; i++){
    if(pikachuHealth <= onixAttack - pikachuDefense){
        console.log("Pikachu has fainted, the battle is over")
    }else {
        pikachuHealth -= (onixAttack - pikachuDefense)
        console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}}

while(pikachuHealth > 0){
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
    if(pikachuHealth <= 0){
        console.log("Pikachu has fainted, the battle is over")
    }
}