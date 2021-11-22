const server = require('./lib/server');
const workers = require('./lib/workers');
const cli = require('./lib/cli');

// Declare the app
const app = {};

// Initialization function
app.init = () => {
  // Start the server
  server.init();
  // Start the workers
  workers.init();
  // Start the CLI, but make sure it starts last
  setTimeout(()=>{
    cli.init();
  }, 50);
};

// Execute
app.init();

// Export tha app
module.exports = app;
