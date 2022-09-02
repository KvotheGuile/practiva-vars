input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    decide = randint(0, 3)
    if (decide == 0) {
        txt = "A"
    } else if (decide == 1) {
        txt = "B"
    } else if (decide == 2) {
        txt = "C"
    } else {
        txt = "D"
    }
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(txt)
})
let decide = 0
let num = 0
let txt = ""
txt = "SUS"
num = 0
decide = 0
