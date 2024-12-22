function showBookingForm() {
    document.getElementById('booking-form').style.display = 'block';
}

document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tentType = document.getElementById('tentType').value;
    const nights = document.getElementById('nights').value;

    fetch('/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, tentType, nights }),
    })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            document.getElementById('booking-form').style.display = 'none';
        })
        .catch((error) => console.error('Error:', error));
});
