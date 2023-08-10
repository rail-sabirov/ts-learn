{
const user = {
    firstName: 'Anton',
    lastName: 'Larichev',
    city: 'Boston',

    // можно указать тип после значение используя as
    age: 33 as number,


    skills: {
        dev: true,
        devops: true
    }
}

// В аргументе задаем объект-сущность userEntity у которого есть поля firstName и lastName
// Эту сущьность можно спрятать в interface и type
function getFullName(userEntity: { firstName: string, lastName: string }): string {
    return `${userEntity.firstName} ${userEntity.lastName}`
}


console.log(getFullName(user))
}