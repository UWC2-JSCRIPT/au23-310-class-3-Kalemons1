//HW Exercises #3

//Attack function

/*const attack = function(attacker, defender, bd, vd){
const randomDamage = Math.floor(Math.random() * (vd + 1))
const totalDamage = bd + randomDamage
defender.Health -= totalDamage
console.log(randomDamage);
return `${attacker.Name} hits ${defender.Name} for ${totalDamage} damage`;
}
*/
const p1 = {
    Health: 10,
    Name: "Kyle"
}
const p2 = {
    Health: 10,
    Name: "Clark"}

const attack = (attackingPlayer, defendingPlayer, baseDamage, variableDamage) => {
    const randomDamage = Math.floor(Math.random() * (variableDamage + 1));
    const totalDamage = baseDamage + randomDamage;
    defendingPlayer.health -= totalDamage;
    return `${attackingPlayer.Name} attacks ${defendingPlayer.Name} for ${totalDamage} damage.`; };

    const damageReport = attack(p1, p2, 5, 3);
console.log(damageReport);
//Receipt
const logReceipt = (...items) => {
let total = 0
items.forEach((item)=>{
    total += item.price
    console.log(item.descr)
})

console.log(total)
}

const obj1 = {descr: "Burger", price: 11.99}
const obj2 = {descr: "Fries", price: 1.99}
const obj3 = {descr: "Fish", price: 21.99}
const obj4 = {descr: "Falafel", price: 10.99}

logReceipt(obj1, obj4, obj2)

//Spaceship Problem
class Spaceship {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed
    }
    
        accelerate(){
            console.log(`${this.name} is accelerating to ${this.topSpeed}`)
    }
    }
    
    const kyleSpaceShip = new Spaceship("Kyle's Spaceship", "Lightspeed");
    
    kyleSpaceShip.accelerate(); 

    // Phone Number Using Regex
    function testPhoneNumber(phoneNumber) {
        // Regular expression for valid phone number formats
        const phoneRegex = /^(\(\d{3}\)\s?|\d{3}[-\s])?\d{3}[-\s]?\d{4}$/;
        return phoneRegex.test(phoneNumber);
    }
    
    function parsePhoneNumber(phoneNumber) {
        const parseRegex = /^(\(\d{3}\)\s?|\d{3}[-\s])?(\d{3}[-\s]?\d{4})$/;
        
        const match = parseRegex.exec(phoneNumber);
    
        if (match) {
            const areaCode = match[1] ? match[1].replace(/[\s\(\)-]/g, '') : '';
            const phoneNumber = match[2].replace(/[\s-]/g, '');
            return { areaCode, phoneNumber };
        }
    
        return null;
    }
    
    // Example
    const phoneNumber = '(818) 857-9685';
    const isValid = testPhoneNumber(phoneNumber);
    console.log(`Is valid phone number: ${isValid}`);
    
    const parsedNumber = parsePhoneNumber(phoneNumber);
    if (parsedNumber) {
        console.log(`Area Code: ${parsedNumber.areaCode}, Phone Number: ${parsedNumber.phoneNumber}`);
    } else {
        console.log('Invalid phone number format.');
    }
    


    //Sounders Rank Calculator

    (function () {
        function getPointsFromResult(result) {
            // Calculate points based on the result
            if (result === 'w') {
                return 3; // 3 points for a win
            } else if (result === 'd') {
                return 1; // 1 point for a draw
            } else if (result === 'l') {
                return 0; // 0 points for a loss
            }
        }
    
        function getTotalPoints(results) {
            const resultArray = results.split('');
            let totalPoints = 0;
    
            resultArray.forEach((result) => {
                totalPoints += getPointsFromResult(result);
            });
    
            return totalPoints;
        }
    
        function orderResults() {
            const teams = Array.from(arguments); 
    
            teams.forEach((team) => {
                const { name, results } = team;
                const totalPoints = getTotalPoints(results);
                console.log(`${name}: ${totalPoints} points`);
            });
        }
    
        // Example
        orderResults(
            { name: 'Sounders', results: 'wddwww'},
            { name: 'Timbers', results: 'lldl' },
            { name: 'Miami FC', results: 'www' }
        );
    })();
    
