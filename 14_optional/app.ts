// Optional
{
    // Optional in interface
    interface User {
        name: string;
        password?: string;
    }

    const user: User = {
        name: 'Vasya'
    }

    // Optional type
    type Role = {
        name: string,
        description?: string
    }

    const role: Role = {
        name: 'Admin'
    }

    // Optinal in function
    function multiply(first: number, second?: number): number {
        return !!second ? first * second : first * first;
    }


    interface UserPro {
        login: string;
        password?: {
            type: 'primary' | 'secondary'
        }
    }

    function testPass(user: UserPro) {
        // const t = user.password ? user.password.type : undefined;
        const t = user.password?.type;
    }

    // ?? - Is not null or undefined
    // long description
    function test1(param?: string): string {
        const res = 'Null or undefined';

        if (param == null || param == undefined) {
            return res;
        }

        return param
    }

    // short
    function test2(param?: string): string {
        return param ?? 'Null or undefined';
    }
}