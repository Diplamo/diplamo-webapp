import * as Moralis from 'moralis'
import { AppConfig } from '.'

Moralis.start({
  serverUrl: 'https://51lc2lsjkals.usemoralis.com:2053/server',
  appId: 'OVbKCwVaZQGW8h1swL4b3ktbk30KiDmNQNriUmUP',
})

const MoralisConfig = Moralis

export default MoralisConfig
