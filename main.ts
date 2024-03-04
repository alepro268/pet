input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # # .
        . . # . .
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . # # #
        . # . # #
        # # . . #
        # . # . #
        # # # # #
        `)
    basic.showString("pizza and drink")
    happy.showImage(0)
    expressions += 2
})
let happy: Image = null
let expressions = 10
let scared = images.createImage(`
    . . . . .
    . . . . .
    . # . # .
    # # # # #
    # . # . #
    `)
happy = images.createImage(`
    . . . . .
    . . . . .
    # . . . #
    # # # # #
    . # # # .
    `)
let sad = images.createImage(`
    . . . . .
    . . . . .
    . # # # .
    # # # # #
    # . . . #
    `)
let neutral = images.createImage(`
    . . . . .
    . # # # .
    . # # # .
    # . # . #
    . # # # .
    `)
basic.forever(function () {
    if (sad || scared) {
        expressions += -1
    }
    if (happy) {
        expressions += -1
    }
})
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB)))) {
        neutral.showImage(0)
        expressions += -1
        basic.pause(5000)
    }
})
