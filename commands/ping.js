const { SlashCommandBuilder } = require('@discordjs/builders');
const { ms } = require('ms');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),
	async execute(interaction) {
		await interaction.reply(`\`${Date.now() - message.createdTimestamp}ms\``);
	},
};