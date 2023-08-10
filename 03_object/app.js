"use strict";
{
    const user = {
        firstName: 'Anton',
        lastName: 'Larichev',
        city: 'Boston',
        age: 33
    };
    const getFullName = (userEntity) => {
        return `${userEntity.firstName} ${userEntity.lastName}`;
    };
    console.log(getFullName(user));
}
