import { Contact } from '../app/services/create-fake-data.service';

export class AppConsts {
    static contacts: Array<Contact> = [
        {
            id: 2,
            firstName: 'John',
            lastName: 'Dalton',
            email: 'memail@email.com',
            dateOfBirth: new Date(),
            address: 'just a sample address',
            city: 'Berlin',
            salary: 8000
        },
        {
            id: 3,
            firstName: 'John',
            lastName: 'Mc Tavish',
            email: 'mac_tavish@email.com',
            dateOfBirth: new Date(),
            address: 'just a sample address',
            city: 'Berlin',
            salary: 1000
        },
        {
            id: 4,
            firstName: 'Soap',
            lastName: 'Price',
            email: 'price@email.com',
            dateOfBirth: new Date(),
            address: 'just a sample address',
            city: 'Berlin',
            salary: 9000
        }
    ]
}