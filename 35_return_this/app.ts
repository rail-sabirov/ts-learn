{
        class UserBuilder {
        name: string;

        setName(name: string): this {
            this.name = name;
            return this;
        }

        // type guard --> ": this is AdminBuilder"
        isAdmin(): this is AdminBuilder {
            return this instanceof AdminBuilder;
        }
    }

    const user = new UserBuilder().setName('Vasya');
    console.log(user)

    class AdminBuilder extends UserBuilder {
        roles: string[];
    }

    const admin = new AdminBuilder().setName('Kolya');

    type UserOrAdmin = UserBuilder | AdminBuilder;

    // используя описаный в классе UserBuilder, 
    // type guard определяем какого класса переменная userOrAdmin
    let userOrAdmin: UserOrAdmin = new UserBuilder();

    if (userOrAdmin.isAdmin()) {
        console.log(userOrAdmin); // AdminBuilder
    
    } else {
        console.log(userOrAdmin); // UserBuilder
    }

}