export const HAS_GEO = "geolocation" in navigator;

function deg2rad(deg) {
    return deg * Math.PI / 180;
}

export class Position {
  constructor(lat, long) {
    this.latitude = lat;
    this.longitude = long;
  }

  static fromNavPosition(position) {
      return new Position(position.coords.latitude, position.coords.longitude);
  }

  static async current() {
    if (!("geolocation" in navigator)) return null;
    return new Promise(resolve =>
      navigator.geolocation.getCurrentPosition(resolve)
    ).then(Position.fromNavPosition);
  }

  distance(that) {
      const R = 6371;
      const dLat = deg2rad(that.latitude - this.latitude);
      const dLon = deg2rad(that.longitude - this.longitude);
      const sinHalfDLat = Math.sin(dLat / 2);
      const sinHalfDLon = Math.sin(dLon / 2);
      const a = sinHalfDLat * sinHalfDLat + Math.cos(deg2rad(this.latitude)) * Math.cos(deg2rad(that.latitude)) * sinHalfDLon * sinHalfDLon;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
  }
}
