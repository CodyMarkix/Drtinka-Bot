const { SlashCommandBuilder } = require('@discordjs/builders');
const { Interaction } = require('discord.js');
const { ms } = require('ms');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),
	async execute(interaction) {
		const sendtime = Interaction.createdTimestamp
		await interaction.reply(`Pong! :ping_pong:`);
	},
};