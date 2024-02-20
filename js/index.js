const seatListObject = {}


//keyboardButton.addEventListener('click', bookSeat('a2Button'));

function bookSeat(buttonId) {
    const keyboardButton = document.getElementById(buttonId);
    const seatName = keyboardButton.innerText;
    keyboardButton.style.backgroundColor = 'green';
    keyboardButton.style.color = 'white';
    console.log(seatName);
    console.log(!(seatName in seatListObject))
    if (!(seatName in seatListObject)) {
        const ticketList = document.getElementById('seatList');
        const seatElement = document.createElement('div');
        // seatElement.innerText = 'nahian';
        seatElement.innerHTML = `
   <div class="flex justify-between">
        <p class="text-gray-500">${seatName}</p>
        <p class="text-gray-500">economy</p>
        <p class="text-gray-500">550</p>
    </div>
   `
        ticketList.appendChild(seatElement);
        seatListObject[seatName] = true;
        //ticketList.innerHTML = '<div> nahian </div>';
        const totalSeatElement = document.getElementById('totalSeat');
        let totalSeatCount = totalSeatElement.innerText;
        console.log(parseInt(totalSeatCount) + 1);
        totalSeatCount = parseInt(totalSeatCount) + 1;
        totalSeatElement.innerText = totalSeatCount;

    }
}


