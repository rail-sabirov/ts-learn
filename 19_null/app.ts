// Null and Typescript strict mode

{
    // в строгом режиме к значение null можно присвоить только к типам null и any
    const n: null = null;
    const n1: any = null;


    // return type
    interface User {
        name: string;
    }

    function getUser() {
        if (Math.random() > 0.5) {
            return null;
        
        } else {
            return { name: 'Vasya' } as User
        }
    }
    
    const user = getUser(); // -> User | null
    const userName = user?.name ?? ''; // -> string
    
    // or
    if (user) {
        const userName = user.name;
    }



}
