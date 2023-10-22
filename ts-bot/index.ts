import {Client, GatewayIntentBits, Collection} from 'discord.js'
import {config} from 'dotenv'
import * as process from 'process'
import {IClient} from '@core/types'
import {commandHandler} from './src/handlers/Comand'
import {eventHandler} from './src/handlers/Event'

config()

const {Guilds, GuildMessages, MessageContent, GuildMembers} = GatewayIntentBits
const client: IClient = new Client({intents: [Guilds, GuildMessages, MessageContent, GuildMembers]})

client.commands = new Collection()
client.events = new Collection()

client.login(process.env.TOKEN)
  .then(() => {
    commandHandler(client)
    eventHandler(client)
  })
