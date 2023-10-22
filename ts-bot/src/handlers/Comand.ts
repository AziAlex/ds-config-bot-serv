import { IClient } from '@core/types'
import { readdirSync } from 'fs'

export const commandHandler = (client: IClient) => {
    const commandsArray = []

    const commandsFolders = readdirSync(__dirname + '/../slashCommands')
    for (const folder of commandsFolders) {
        const commandFiles = readdirSync(__dirname + `/../slashCommands/${folder}`)
          .filter(file => file.endsWith('.ts'))

        for (const file of commandFiles) {
            const commandFile = require(`../slashCommands/${folder}/${file}`)
            client.commands?.set(commandFile.data.name, commandFile)

            commandsArray.push(commandFile.data.toJSON())
        }
    }
    client.application?.commands.set(commandsArray)
}