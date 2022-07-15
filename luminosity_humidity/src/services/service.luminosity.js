exports.luminosityService = class LuminosityService {
  static luminosity = 20;
  static async define(luminosity) {
    this.luminosity = luminosity;
  }

  static async update(luminosity) {
    if (luminosity > this.luminosity) {
      return true;
    }
    return false;
  }
};
