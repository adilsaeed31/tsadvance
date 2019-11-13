export class CustomMap {
  private googleMaps: google.maps.Map

  constructor() {
    this.googleMaps = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }
}
