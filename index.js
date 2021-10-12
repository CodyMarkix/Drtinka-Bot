// Import packages
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


// Print when bot is online
client.once('ready', () => {
	console.log('Ready!');
});

// Login bot
client.login(token);