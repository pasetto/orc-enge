export class User {
    id: string;
    email: string;
    password: string;
    name: string;
    cpf: string;
    gender: string;
    profiles: any[];
    accessToken?: string;
}