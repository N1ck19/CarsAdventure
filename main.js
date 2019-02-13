// Variables
let car = {
	//key: value
	make: "Chrysler",
	model: "Pacifica"
	color: "white",
	mileage: 0,
	isWorking: true,

	driveToWork() {
		alert(`Old Mileage: ${this.mileage}`);
		this.mileage = this.mileage + 10;
		alert(`New Mileage: ${this.mileage}`);
	},


}

// Func
// Log car stats to console

const rewriteStats() => {

}

// Main Process
//Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.

const document.onkeyup(event) => {
	// Captures the key press, converts it to lowercase, and saves it to a variable.
	let letter = String.fromCharCode(event.keyCode).toLowerCase();
	if (letter === "d") {
		car.driveToWork();
		rewriteStats();
	}
}