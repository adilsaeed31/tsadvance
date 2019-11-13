export class CustomMap {
  private gogoleMaps: google.maps.Map

  constructor() {
    this.gogoleMaps = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }
}
