exports.temperatureService = class TemperatureService {
  static temperature = 20;
  static async define(temperature) {
    this.temperature = temperature;
  }

  static async update(temperature) {
    if (temperature > this.temperature) {
      return true;
    }
    return false;
  }
};
