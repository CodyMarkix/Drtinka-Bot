const { SlashCommandBuilder } = require('@discordjs/builders');
const { ms } = require('ms');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Gives info about user.'),
	async execute(interaction) {
		await interaction.reply(`User info:\nDiscord name: ${interaction.user.tag}\nDiscord ID: ${interaction.user.id}`);
	},
};