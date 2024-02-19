// click btn and view section
const bookingSecID = document.getElementById('booking-section');
document.getElementById('buy-ticket-btn').addEventListener('click',()=>{
    bookingSecID.scrollIntoView({ behavior: 'smooth' });
});
//initial values
let totalSeat = 40;
let clickOnSeat = 0;
let totalPrice = 0;
//select all ids from booking section.
const seatCount = document.getElementById('seat-counter');
const ticketDetailsContainer = document.getElementById('show-ticket-details-container');
const seats = document.querySelectorAll('.sit');
const buyingSeatCount = document.getElementById('count-seat');
const totalTicketPrice = document.getElementById('total-price');
const totalDiscountPrice = document.getElementById('grand-price');

const bookingSeats =[];
for(const seat of seats){
    seat.addEventListener('click',()=>{
        const seatName = seat.innerHTML;
        
        totalSeat--;
        //sit limitation handle
        if(clickOnSeat<4){
                if(bookingSeats.includes(seatName)){
                    alert("This seat is already selected !!!! ");
                }else{
                    bookingSeats.push(seatName);
                    clickOnSeat++;
                    buyingSeatCount.innerText = clickOnSeat;
                    seat.classList.toggle('bg-green-500')
                    seat.classList.toggle('hover:bg-green-500');
                    const div = document.createElement('div');
                    const p1 = document.createElement('p');
                    const p2 = document.createElement('p');
                    const p3 = document.createElement('p');
                    p1.innerText = seatName;
                    p2.innerText = "economy";
                    p3.innerText = 550;
                    div.appendChild(p1);
                    div.appendChild(p2);
                    div.appendChild(p3);
                    div.classList.add('show-details')
                    ticketDetailsContainer.appendChild(div);
                    const intPrice = parseInt(p3.innerText);
                    totalPrice += intPrice;
                    totalTicketPrice.innerText = totalPrice;
                    totalDiscountPrice.innerText = totalPrice;
            }
   
        }else{
           
            alert("you can buy maximum 4 seats!!!");
            
        }
        seatCount.innerText = totalSeat;
    })
}