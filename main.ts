
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    brick.setStatusLight(StatusLight.GreenFlash)

    brick.showString("Hello world", 1)
    brick.showString("everything is awsome", 2)
})
