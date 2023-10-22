import {IEvent} from "@core/types";
import {Message} from "discord.js";

const event: IEvent = {
  name: 'messageCreate',
  async execute(message: Message) {
    if (message.author.bot) return

    await message.reply({
      content: message.content
    })
  }
}
module.exports = event