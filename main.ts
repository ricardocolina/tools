input.onButtonPressed(Button.A, function () {
    Tool = 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Tool = 2
    basic.clearScreen()
})
let plot_y = 0
let plot_x = 0
let y = 0
let x = 0
let Tool = 0
Tool = 0
basic.forever(function () {
    if (Tool == 1) {
        x = input.acceleration(Dimension.X)
        y = input.acceleration(Dimension.Y)
        if (x < -700) {
            led.unplot(plot_x, plot_y)
            plot_x = 0
        } else if (x < -200) {
            led.unplot(plot_x, plot_y)
            plot_x = 1
        } else if (x > 700) {
            led.unplot(plot_x, plot_y)
            plot_x = 4
        } else if (x > 200) {
            led.unplot(plot_x, plot_y)
            plot_x = 3
        } else {
            led.unplot(plot_x, plot_y)
            plot_x = 2
        }
        if (y < -700) {
            plot_y = 0
        } else if (y < -200) {
            plot_y = 1
        } else if (y > 700) {
            plot_y = 4
        } else if (y > 200) {
            plot_y = 3
        } else {
            plot_y = 2
        }
        led.plot(plot_x, plot_y)
    } else if (Tool == 2) {
        if (input.compassHeading() >= 315 || input.compassHeading() < 45) {
            basic.showArrow(ArrowNames.South)
        } else if (input.compassHeading() < 135) {
            basic.showArrow(ArrowNames.West)
        } else if (input.compassHeading() < 225) {
            basic.showArrow(ArrowNames.North)
        } else {
            basic.showArrow(ArrowNames.East)
        }
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . . # . .
            . . # . .
            `)
    }
})
