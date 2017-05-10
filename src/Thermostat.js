function Thermostat() {
  this.temperature = 20;
  this.minTemperature = 10;
  this.powerSavingMode = true
};

Thermostat.prototype.up = function(n = 1) {
    this.temperature += n
}

Thermostat.prototype.down = function(n = 1) {
  this.temperatureController(n)
  this.temperature -= n;
}

Thermostat.prototype.temperatureController = function(n) {
  if (this.temperature - n < this.minTemperature) throw('BBBRRRRR TOO COLD');
}

Thermostat.prototype.powerSavingToggle = function() {
  this.powerSavingMode = !this.powerSavingMode
}
