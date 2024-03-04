let expressions = 10
let scared = images.createImage(`
    . . . . .
    . . . . .
    . # . # .
    # # # # #
    # . # . #
    `)
let happy = images.createImage(`
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
        expressions += -1
        basic.pause(5000)
    }
})
