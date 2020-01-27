radio.onReceivedString(function (receivedString) {
    basic.pause(200)
    radio.sendString("ping")
})
input.onButtonPressed(Button.AB, function () {
	
})
let instance = 0
radio.setGroup(255)
radio.setTransmitPower(7)
let PossibleChannels = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let channels = [1, 2, 0, 0]
for (let index = 0; index < 4; index++) {
    channels.push(PossibleChannels.removeAt(Math.randomRange(0, PossibleChannels.length - 1)))
}
