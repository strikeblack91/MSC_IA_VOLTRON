exports.humidityService = class HumidityService {
  static humidity = 20;
  static async define(humidity) {
    this.humidity = humidity;
  }

  static async update(humidity) {
    if (humidity > this.humidity) {
      return true;
    }
    return false;
  }
};
