enum GenderEnum {
    female = "female",
    male = "male",
  }
export interface IPerson {
    firstName: string,
    lastName: string,
    emailPerson: string,
    phonePerson: [string],
    gender: GenderEnum
}

export interface ISportBox{
    name: string,
    adress: string,
    description: string,
    parking: boolean,
    price: number,
    geo?: Location,
    admin?: IPerson[]
}

export const defaultSportBox: ISportBox = {
    name: 'Name BOX',
    adress: 'Beltsy',
    description: 'Description',
    parking: true,
    price: 100
  }