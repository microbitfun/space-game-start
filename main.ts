input.onPinPressed(TouchPin.P0, function () {
    ship.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P1, function () {
    ship.change(LedSpriteProperty.X, 1)
})
let enemy: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
ship.set(LedSpriteProperty.Brightness, 250)
game.setScore(0)
basic.forever(function () {
    enemy = game.createSprite(randint(0, 4), 1)
    enemy.set(LedSpriteProperty.Brightness, 150)
    basic.pause(150)
    enemy.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (enemy.isTouching(ship)) {
            game.gameOver()
        }
    }
    if (enemy.isTouchingEdge()) {
        enemy.delete()
    }
})
