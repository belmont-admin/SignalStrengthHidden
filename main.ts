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
    nextChannel = parseFloat(channelsText[myNumber + 1])
    if (myNumber == 0) {
        radio.sendValue("setup", parseFloat(channelsText))
        radio.setGroup(1)
    } else {
        radio.setGroup(myChannel)
    }
    myNumber += 1
    if (myNumber > 4) {
        myNumber = 1
    }
    basic.showNumber(myNumber)
    basic.pause(1000)
    basic.showString("H")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(nextChannel)
    basic.pause(1000)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list[myNumber - 1]))
    basic.pause(1000)
    basic.showString("H")
})
let nextChannel = 0
let myChannel = 0
let text_list: string[] = []
let channels: number[] = []
let channelsText = ""
let myNumber = 0
basic.showString("H")
myNumber = 0
radio.setGroup(255)
radio.setTransmitPower(7)
let PossibleChannels = [2, 3, 4, 5, 6, 7, 8, 9]
channelsText = ""
for (let index = 0; index < 4; index++) {
    channels.push(PossibleChannels.removeAt(Math.randomRange(0, PossibleChannels.length - 1)))
}
for (let index1 = 0; index1 <= 3; index1++) {
    channelsText = "" + channelsText + convertToText(channels[index1])
}
text_list = ["M", "I", "C", "R"]
