type address = {
    city: string
}

type contact = {
    phone: string,
    email: string,
    address: address
}

type info = {
    officeId: number,
    isOpened: boolean,
    contacts: contact
} 

const myOffice: info = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+180080080000",
        "email": "my@email.com",
        "address": {
            "city": "Boston"
        }
    }
}

console.log(myOffice)