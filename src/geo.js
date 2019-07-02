export const HAS_GEO = "geolocation" in navigator;

export class Position {
  constructor(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }

  static async current() {
    if (!("geolocation" in navigator)) return null;
    return new Promise(resolve =>
      navigator.geolocation.getCurrentPosition(resolve)
    ).then(x => new Position(x));
  }
}
