radio.setGroup(255)
let instance = 0
let channelList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let channels = [1, 2, 0, 0]
for (let index = 0; index < 4; index++) {
    channels.push(channelList.removeAt(Math.randomRange(0, channelList.length - 1)))
}
