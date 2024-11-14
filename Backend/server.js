require('dotenv').config({ path: __dirname + '/.env' }); 
const express = require('express');
const cors = require('cors');
const driverRoutes = require('./routes/driverRoutes');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    
    this.middlewares();
    this.routes();
    this.start();
  }

  middlewares() {
    this.app.use(cors());
  }

  routes() {
    this.app.use('/api', driverRoutes);
    this.app.get('/', (req, res) => {
      res.send('Welcome! The server is running. Use the appropriate API endpoints like /api/driver-profile.');
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}


new Server();