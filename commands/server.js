const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Gives info about server.'),
	async execute(interaction) {
		await interaction.reply(`Server info:\nName: ${interaction.guild.name}`);
	},
};