import {RegistrationValues} from "@/types/login.type";

export class RegisterServiceGraph{
    private static instance: RegisterServiceGraph;

    private constructor() {}

    public static getInstance(): RegisterServiceGraph {
        if (!RegisterServiceGraph.instance) {
            RegisterServiceGraph.instance = new RegisterServiceGraph();
        }
        return RegisterServiceGraph.instance;
    }

    public async registerUser(values: RegistrationValues) {
        const mutation = `
      mutation create($name: String!, $lastName: String!, $userName: String!, $email: String!, $password: String!) {
        create(name: $name, lastName: $lastName, userName: $userName ,email: $email, password: $password) {
          name
          lastName
          userName
          email
          password
        }
      }
    `;
        const response = await fetch('http://localhost:8000', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: mutation, values }),
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.errors?.[0]?.message || 'Error al registrar usuario');
        }
        return data.data.registerUser;
    }
}


