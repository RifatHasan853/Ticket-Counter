let seatCount = 0;
let remainingSeat = 8; // You can change this value based on your initial available seats
const pricePerSeat = 550;
let totalPrice = 0;
let discountPercentage = 0;

// Function to select a seat
function selectSeat(seat) {

  if (seatCount >= 4 && !seat.classList.contains('selected')) {
        alert('You can only buy 4 seats at a time.');
        return;
    }
   
    
    // Toggle selected class for styling
    seat.classList.toggle('selected');
   /* if (seat.classList.contains('selected')) {
        // Increment seat count
        seatCount++;
        // Decrement remaining seat count
        remainingSeat--;
    } else {
        // Decrement seat count
        seatCount--;
        // Increment remaining seat count
        remainingSeat++;
    }
    
    // Update seat count and remaining seat count in the HTML
    document.getElementById('seat-count').innerText = seatCount;
    document.getElementById('remain-seat').innerText = remainingSeat;*/
    // Get the seat number
    const seatNumber = seat.innerText;
    const seatClass = 'Economy'; // Assuming all seats are of economy class

    // Update total price based on the number of selected seats
    if (seat.classList.contains('selected')) {
        seatCount++;
        remainingSeat--;
        totalPrice += pricePerSeat;
    } else {
        seatCount--;
        remainingSeat++;
        totalPrice -= pricePerSeat;
    }
    document.getElementById('seat-count').innerText = seatCount;
    document.getElementById('remain-seat').innerText = remainingSeat;

    // Update selected seat information in the HTML
    const selectedSeatsTable = document.getElementById('selected-seats');
    const newRow = selectedSeatsTable.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    cell1.textContent = `Seat: ${seatNumber}`;
    cell2.textContent = `Class: ${seatClass}`;
    cell3.textContent = `Price: $${pricePerSeat}`;

    // Update total price in the HTML
    document.getElementById('total-price').innerText = totalPrice;
}

// Function to apply coupon code
function applyCoupon() {
    const couponInput = document.getElementById('coupon-input').value;

    // Check which coupon code is applied
    if (couponInput === 'NEW15') {
        discountPercentage = 15;
    } else if (couponInput === 'couple 20') {
        discountPercentage = 20;
    } else {
        // Reset discount percentage if invalid coupon code is entered
        discountPercentage = 0;
    }

    // Calculate total price with discount
    const discountAmount = (totalPrice * discountPercentage) / 100;
    const grandTotal = totalPrice - discountAmount;

    // Update grand total in the HTML
    document.getElementById('grand-total').innerText = grandTotal;

    // Hide coupon input section
    document.getElementById('coupon-input').style.display = 'none';
    document.getElementById('apply-btn').style.display = 'none';
}
    // Check if the seat is already selected
    


// Function to apply coupon code
function applyCoupon() {

    //document.getElementById('coupon-input').style.display = 'none';
    //document.querySelector('button').style.display = 'none';
    //document.getElementById('coupon-input').style.display = 'none';
    //document.getElementById('apply-btn').style.display = 'none';
    const couponInput = document.getElementById('coupon-input').value;
    
    // Check which coupon code is applied
    if (couponInput === 'NEW15') {
        discountPercentage = 0.15;
   } else if (couponInput === 'couple20') {
        discountPercentage = 0.2;
    } else {
        // Reset discount percentage if invalid coupon code is entered
        discountPercentage = 0;
    }
    
    // Calculate total price with discount
    const discountAmount = (pricePerSeat * seatCount * discountPercentage) / 100;
    totalPrice = (pricePerSeat * seatCount) - discountAmount;
    
    // Update total price and grand total in the HTML
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('grand-total').innerText = totalPrice;
    
    // Hide coupon input section
    document.getElementById('coupon-input').style.display = 'none';
    document.getElementById('apply-btn').style.display = 'none';
}

// Function to continue after booking
function play() {
    hideElementById('header');
    hideElementById('sec-1');
    hideElementById('sec-2');
    hideElementById('sec-3');
    
    showElementById('sec-4');
   
    //Hide all sections except sec-4
   /* const sections = document.querySelectorAll('section:not(#sec-4)');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Display sec-4
    //const sec4 = document.getElementById('sec-4');
    //sec4.style.display = 'flex';
    //sec4.forEach(sec4 => {
       // sec4.style.display = 'flex';
   // }); 
    const sec4 = document.getElementById('sec-4');
    sec4.style.display = 'flex';*/

}
function continueBooking() {

    hideElementById('sec-4');

 showElementById('header');
 showElementById('sec-1');
 showElementById('sec-2');
 showElementById('sec-3');
 setTextElementValueById('seat-count',0);
 setTextElementValueById('remain-seat',8);
    // Hide all sections except sec-4
   
   /* const sec4 = document.getElementById('sec-4');
    sec4.style.display = 'hidden';
    
        
   
    const sections = document.querySelectorAll('section:not(#sec-4)');
    sections.forEach(section => {
        section.style.display = 'flex';
        sec4.style.display = 'hidden';
    });*/
    
   
}