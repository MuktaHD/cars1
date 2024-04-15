function showRedCar() {
    hideAllCars();
    document.querySelector('.red').style.display = 'block';
}

function showBlackCar() {
    hideAllCars();
    document.querySelector('.black').style.display = 'block';
}

function showGrayCar() {
    hideAllCars();
    document.querySelector('.gray').style.display = 'block';
}

function hideAllCars() {
    var cars = document.querySelectorAll('.car');
    cars.forEach(function(car) {
        car.style.display = 'none';
    });
}

// Show the default red car when the page loads
showRedCar();
