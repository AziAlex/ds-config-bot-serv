import {IClient, IEvent} from "@core/types";
import {CommandInteraction} from "discord.js";

const event: IEvent = {
  name: 'interactionCreate',
  execute: async (interaction: CommandInteraction, client: IClient) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands?.get(interaction.commandName);

    if (!command) {
      await interaction.reply({content: "outdatet commands", ephemeral: true});
    }

    command.execute(interaction);
  }
}
module.exports = event