require('dotenv').config();
const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: 'http://localhost:3001',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  authorizationParams: {
    response_type: 'code',  
    audience: process.env.AUTH0_AUDIENCE, 
    scope: 'openid profile email', 
  },
};

async function getManagementToken() {
    const response = await axios.post(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      grant_type: "client_credentials",
    });

    return response.data.access_token;
}


app.use(auth(config));


app.get("/profile", async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
        console.log(token);
      const response = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(401).json({ error: "Token inválido" });
    }
  });

  
app.get('/jwt', requiresAuth(), (req, res) => {
  const user = req.oidc.user;
  
  const token = jwt.sign(
    { sub: user.sub, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});


app.get('/', (req, res) => {
    res.send('Microservicio de autenticación funcionando');
});


app.post("/register", async (req, res) => {
    try {
      const { email, password, name } = req.body;
  
      //const token = await getManagementToken();
      const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlVsUnVkREF6WHdma2Rua3hHWXhSeSJ9.eyJpc3MiOiJodHRwczovL2Rldi14cm5mMGIzNm12Nm9rYzJ6LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJ1dDFUM1Q2Z3NwMHJPaG9aTUk5YjZ2S3pSZDJaVGt0MUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYteHJuZjBiMzZtdjZva2Myei51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTc0MDc3NTMzMywiZXhwIjoxNzQxMzYxNzMzLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJhenAiOiJ1dDFUM1Q2Z3NwMHJPaG9aTUk5YjZ2S3pSZDJaVGt0MSJ9.mYBEfPyN7ow8Ek9ijyl09_T8tDmAi05kMzhJX-wiy3hTFfdo5w954NPNkII0-0OjvCuopDe-LmoXiSChjPNvT1LV0yB1SFtWuHeKJ2Kt2mv58yQgxZ-TWGUCUHih67vvhq5CuOk8aj_qJlxwyLBqh01OgtFh4dHubva3_qsArrNPDNkhMtqXbZj6xHgb62pn3UVypEG2PQzXr9Tdeg-rv9Z4chSF5UM_HMqGlw5wwSPyEH3WAL-IOSKCcjzFFOEdeQobKEI90jPVsdGoaqgzqHJbenMrOQge6x4MRGKR9vcpt7wQjpB-ePfYHxkZ6ZES1l5LGVe8K7KLu1B_-QAYUg"
        console.log("Token " + token);
      const response = await axios.post(
        `https://${process.env.AUTH0_DOMAIN}/api/v2/users`,
        {
          email,
          password,
          name,
          connection: "Username-Password-Authentication",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      res.json(response.data);
    } catch (error) {
      res.status(400).json({ error: error.response.data });
    }
});  

app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const response = await axios.post(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
        grant_type: "password",
        client_id: process.env.AUTH0_WEB_CLIENT_ID,
        client_secret: process.env.AUTH0_WEB_CLIENT_SECRET,
        username: email,
        password: password,
        audience: process.env.AUTH0_WEB_AUDIENCE,
        scope: "openid profile email",
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(400).json({ error: error.response.data });
    }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
