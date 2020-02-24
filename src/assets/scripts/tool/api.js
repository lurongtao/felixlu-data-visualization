const isOnline = false
const onlineApiHost = isOnline ? 'http://88.888.88.88:8888/project/' : 'http://nz.com/'

export default {
  castleTop: onlineApiHost + 'fantasy/castle/top',
  iotalarm: onlineApiHost + 'iot/overview/alarm',
  iottop5: onlineApiHost + 'iot/overview/top5',
  iottrend: onlineApiHost + 'iot/overview/trend',
  district: onlineApiHost + 'stride/fireworks/city',
  list: onlineApiHost + 'stride/fireworks/list',
  dotemap: onlineApiHost + 'fantasy/castle/dotemap'
}
