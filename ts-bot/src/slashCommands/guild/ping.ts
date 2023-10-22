import {SlashCommandBuilder} from 'discord.js'
import {ICommand} from "@core/types";

const command: ICommand = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  async execute(interaction) {
    await interaction.reply({
      content: 'pong',
      ephemeral: true
    })
  }
}
module.exports = command