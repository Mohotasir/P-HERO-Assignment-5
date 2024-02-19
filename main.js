// click btn and view section
const bookingSecID = document.getElementById('booking-section');
document.getElementById('buy-ticket-btn').addEventListener('click',()=>{
    bookingSecID.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('menu-btn').addEventListener('click',()=>{
    bookingSecID.scrollIntoView({ behavior: 'smooth' });
});
//initial values
let totalSeat = 40;
let clickOnSeat = 0;
let totalPrice = 0;
let discountPrice = 0;
//select all ids from booking section.
const seatCount = document.getElementById('seat-counter');
const ticketDetailsContainer = document.getElementById('show-ticket-details-container');
const seats = document.querySelectorAll('.sit');
const buyingSeatCount = document.getElementById('count-seat');
const totalTicketPrice = document.getElementById('total-price');
const totalDiscountPrice = document.getElementById('grand-price');
const copunDiv = document.getElementById('cupon-div');
const applyCupon = document.getElementById('apply-cupon');
const grandPriceDiv = document.getElementById('grand-price-div');
const phoneField = document.getElementById('phone-field');
const nextBtn = document.getElementById('next-btn');

const bookingSeats =[];
for(const seat of seats){
    seat.addEventListener('click',()=>{
        const seatName = seat.innerHTML;
        //sit limitation handle
        if(clickOnSeat < 4){
                if(bookingSeats.includes(seatName)){
                    alert("This seat is already selected !!!! ");
                }else{
                    totalSeat--;
                    bookingSeats.push(seatName);
                    clickOnSeat++;
                    buyingSeatCount.innerText = clickOnSeat;
                    seat.classList.toggle('bg-green-300')
                    seat.classList.toggle('hover:bg-green-300');
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
                    if(clickOnSeat === 4){
                       copunDiv.children[0].disabled = false;
                       copunDiv.children[1].disabled = false;
                    }
            }
   
        }else{
            alert("you can buy maximum 4 seats!!!"); 
        }
        seatCount.innerText = totalSeat;
        
    })   
}

function showDiscount(price){
    const disId = document.getElementById('disId');
    const p1 =  document.createElement('p');
    const p2 = document.createElement('p');
    p1.innerText = "Discount Price";
    p2.innerText = 'BDT ' + price;
    disId.appendChild(p1);
    disId.appendChild(p2);
}
applyCupon.addEventListener('click',()=>{
    if(copunDiv.children[0].value === "NEW15"){
        discountPrice = totalPrice* .15;
        totalDiscountPrice.innerText = totalPrice - discountPrice;
        copunDiv.classList.add('hidden');
        grandPriceDiv.classList.add('bg-green-300')
        showDiscount(discountPrice);
    }else if(copunDiv.children[0].value === "Couple 20"){
        discountPrice = (totalPrice*.20);
        totalDiscountPrice.innerText = totalPrice - discountPrice ;
        copunDiv.classList.add('hidden');
        grandPriceDiv.classList.add('bg-green-300');
        showDiscount(discountPrice);
    }else{
        const err = document.getElementById('err-msg');
        err.classList.add('text-red-700');
        err.innerText = "Wrong coupon !";
    }
})
//active next button
phoneField.addEventListener('keyup',()=>{
    if(bookingSeats.length > 0 && phoneField.value !== null && phoneField.value.trim() !== '' ){
        nextBtn.disabled  = false;
    }else{
        nextBtn.disabled = true;
    }
})