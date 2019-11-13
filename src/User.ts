import Faker from 'faker'

export class User {
  name: string

  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = Faker.name.firstName()

    this.location = {
      lat: parseFloat(Faker.address.latitude()),
      lng: parseFloat(Faker.address.longitude()),
    }
  }
}
