class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
    this.min = min;
    this.max = max;
    }

    guess() {
        //console.log(Math.round((this.min + this.max)/2))
        return Math.round((this.min + this.max)/2);
    }

    lower() {

    this.max = this.guess();
    //console.log(`lower is ${this.min}`)
    }

    greater() {
   this.min = this.guess();
   //console.log(`greater is ${this.min}`)
    }
    
}

module.exports = GuessingGame;
