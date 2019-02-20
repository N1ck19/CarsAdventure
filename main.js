// VARIABLES
let car = {
	//key: value
	make: "Chrysler",
	model: "Pacifica",
	color: "white",
	mileage: 0,
	isWorking: true,

	driveToWork() {
		alert(`Old Mileage: ${this.mileage}`);
		this.mileage += 10;
		alert(`New Mileage: ${this.mileage}`);
	},

	driveAroundUSA() {
		alert(`Old Mileage: ${this.mileage}`);
		this.mileage += 7000;
		alert(`New Mileage: ${this.mileage}`);
		alert("Car needs a tuneup!");
		this.isWorking = false;
	},

	getTuneUp() {
		alert("Car is fixed and ready to go!");
		this.isWorking = true;
	},

	honk() {
		alert("Honk! Honk!");
	},

	notAvail() {
		alert("Not available. Get a tuneup.");
	}
};

// FUNCTIONS
// Log car stats to console

const rewriteStats= () => {
	console.log(`Make: ${car.make}`);
	console.log(`Model: ${car.model}`);
	console.log(`Color: ${car.color}`);
	console.log(`Mileage: ${car.mileage}`);
	console.log(`Is Working: ${car.isWorking}`);
}

// MAIN PROCESS
//Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.

document.onkeyup = (event) => {
	// Captures the key press, converts it to lowercase, and saves it to a variable.
	let letter = String.fromCharCode(event.keyCode).toLowerCase();

	if (letter === "d" && car.isWorking === false) {
			car.notAvail();
			car.mileage -= 10;
		}
		else if (letter === "r" && car.isWorking === false) {
			car.notAvail();
			car.mileage -= 7000;
		}
		else if (letter === "h" && car.isWorking === false) {
			car.notAvail();
		}



	if (letter === "d") {
		car.driveToWork();
		rewriteStats();
	}

	if (letter === "r") {
		car.driveAroundUSA();
		rewriteStats();
	}

	if (letter === "t") {
		car.getTuneUp();
		rewriteStats();
	}

	if (letter === "h") {
		car.honk();
		rewriteStats();
	}
}