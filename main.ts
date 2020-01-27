radio.onReceivedValue(function (name, value) {
    myNumber += 1
    channelsText = convertToText(value)
    basic.showNumber(myNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.pause(200)
    radio.sendString("ping")
})
input.onButtonPressed(Button.AB, function () {
    myChannel = parseFloat(channelsText[myNumber])
    myNumber += 1
    basic.showNumber(myNumber)
    nextChannel = parseFloat(channelsText[myNumber])
    if (myNumber == 1) {
        radio.sendValue("setup", parseFloat(channelsText))
        radio.setGroup(1)
    } else {
        radio.setGroup(myChannel)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(nextChannel)
    basic.pause(1000)
    basic.showNumber(myNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showString(channelsText)
    basic.pause(1000)
    basic.showNumber(myNumber)
})
let nextChannel = 0
let myChannel = 0
let channels: number[] = []
let channelsText = ""
let myNumber = 0
let instance = 0
basic.showString("H")
myNumber = 0
radio.setGroup(255)
radio.setTransmitPower(7)
let PossibleChannels = [1, 2, 3, 4, 5, 6, 7, 8, 9]
channelsText = ""
for (let index = 0; index < 4; index++) {
    channels.push(PossibleChannels.removeAt(Math.randomRange(0, PossibleChannels.length - 1)))
}
for (let index2 = 0; index2 <= 3; index2++) {
    channelsText = "" + channelsText + convertToText(channels[index2])
}
