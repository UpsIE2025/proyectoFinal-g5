

export class RegisterServiceGraph{
    private static instance: RegisterServiceGraph;

    private constructor() {}

    public static getInstance(): RegisterServiceGraph {
        if (!RegisterServiceGraph.instance) {
            RegisterServiceGraph.instance = new RegisterServiceGraph();
        }
        return RegisterServiceGraph.instance;
    }

    public async registerUser(values: { email: string; password: string; name: string }) {
        const mutation = `
      mutation RegisterUser($name: String!, $email: String!, $password: String!) {
        registerUser(name: $name, email: $email, password: $password) {
          id
          name
          email
        }
      }
    `;

        const variables = { ...values };

        const response = await fetch('/api/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: mutation, variables }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.errors?.[0]?.message || 'Error al registrar usuario');
        }

        return data.data.registerUser;
    }
}


