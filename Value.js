
class Format {
  constructor(value, magValue) {
    this.value = value;
    
    this.mag = magValue
  }
}

// Afer Be:
// Can be x: Can the base of power.
// Can be y: Can be exponent of power.
class FormatPower {
  constructor(x, y) {
    this.value = Math.pow(x, y)
    this.x = x
    this.y = y
    this.query = [x, y]
  }
}