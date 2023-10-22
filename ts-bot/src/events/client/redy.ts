import {IClient, IEvent} from '@core/types'

const event: IEvent = {
  name: "ready",
  once: true,
  async execute(client: IClient) {
    console.log(`Logged in as ${client.user?.tag}!`)
  }
}
module.exports = event