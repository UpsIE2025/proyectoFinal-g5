require('dotenv').config();
const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const axios = require("axios");
const { expressjwt: jwtMiddleware } = require('express-jwt');
const jwks = require('jwks-rsa');


const app = express();
app.use(cors());
app.use(express.json());

// Configuración de Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  authorizationParams: {
    response_type: 'code',  
    audience: process.env.AUTH0_AUDIENCE, 
    scope: 'openid profile email', 
  },
};

const checkJwt = jwtMiddleware({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

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
      const { email, password, userName } = req.body;
  
      const token = await getManagementToken();
      const response = await axios.post(
        `https://${process.env.AUTH0_DOMAIN}/api/v2/users`,
        {
          email,
          password,
          userName,
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


function checkTokenExpiration(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    const decodedToken = jwt.decode(token); 
    if (!decodedToken || !decodedToken.exp) {
      return res.status(401).json({ error: "Token inválido" });
    }

    const now = Math.floor(Date.now() / 1000); 
    if (decodedToken.exp < now) {
      return res.status(401).json({ error: "Token expirado" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ error: "Error al procesar el token" });
  }
}

app.get('/secure', checkJwt, checkTokenExpiration, (req, res) => {
  res.json({ message: "Acceso permitido", user: req.auth });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
