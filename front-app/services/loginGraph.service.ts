export class LoginServiceGraph {

    private static instance: LoginServiceGraph;

    private constructor() {
    }

    public static getInstance(): LoginServiceGraph {
        if (!LoginServiceGraph.instance) {
            LoginServiceGraph.instance = new LoginServiceGraph();
        }
        return LoginServiceGraph.instance;
    }

    public async loginUser(values: { email: string; password: string }) {
        const mutation = `
        mutation login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
            email
            password
        }
        `;
        const variables = {...values};
        const response = await fetch('http://localhost:8000', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query: mutation, variables}),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.errors?.[0]?.message || 'Error al registrar usuario');
        }
        return data.data.registerUser;
    }
}