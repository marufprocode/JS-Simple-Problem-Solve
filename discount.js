/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/
//Instructor Solution: 
/* function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100 ){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}


const price = ticketPrice(120);
console.log('price: ', price); */


//My solution with switch:
function totalTicketPrice (ticketQuantity){
    const fristPrice = 100;
    const secondPrice = 90;
    const thirdPrice = 70;
    
    switch (ticketQuantity) {
        case ticketQuantity<=100 :
            totalTicketPrice = 100*ticketQuantity;
            return totalTicketPrice;
            break; 
        case ticketQuantity<=200 :
            const first100Price = 100*fristPrice;
            const restTicketQ = ticketQuantity -100;
            const restTicketPrice = restTicketQ*secondPrice;
            const totalTicketPricee = restTicketPrice+first100Price;
            return totalTicketPricee;
            break;
        default :
            const fst100price = 100*fristPrice
            const second100Price = 100*secondPrice;
            const restTicketQ200 = ticketQuantity-200;
            const restTicketPrice200 = restTicketQ200*thirdPrice;
            const totalTicketPrice200 = fst100price+second100Price+restTicketPrice200;
            return totalTicketPrice200;
            break;
    }
}

const totalPriceOfTicket = totalTicketPrice(210);
console.log(totalPriceOfTicket);
