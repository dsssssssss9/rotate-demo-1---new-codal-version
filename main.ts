let DLay = 5555
basic.forever(function () {
    display.rotateTo(display.Direction.Normal)
    basic.pause(DLay)
    display.rotateTo(display.Direction.LogoToRight)
    basic.pause(DLay)
    display.rotateTo(display.Direction.UpsideDown)
    basic.pause(DLay)
    display.rotateTo(display.Direction.LogoToLeft)
    basic.pause(DLay)
})
basic.forever(function () {
    basic.showString("Frank")
})
