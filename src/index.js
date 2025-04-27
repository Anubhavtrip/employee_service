const app = require('./app');
const sequelize = require('./config/dbConfig');
require('dotenv').config();
const port = process.env.PORT || 3500;

// MySQL connection
const startServer = async () => {
    try {
        await sequelize.authenticate();  // <- yeh sahi method hai
        console.log('✅ Connected to MySQL database!');

        await sequelize.sync();  // <-- Ye line important hai
        console.log('✅ All models were synchronized successfully.');

        app.listen(port, () => {
            console.log(`🚀 Server is running on port ${port}`);
        });

    } catch (error) {
        console.error('❌ Unable to connect to the database:', error.message);
    }
};

startServer();
