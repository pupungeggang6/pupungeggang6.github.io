function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneUIInit()

    contextUI.fillStyle = 'White'
    contextUI.fillRect(0, 0, 1280, 720)
    contextUI.fillStyle = 'Black'

    contextUI.drawImage(img.smile, 0, 0)
    contextUI.fillText('WebGL Game Example', UI.title.textTitle[0], UI.title.textTitle[1])
    contextUI.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    contextUI.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1])
    contextUI.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    contextUI.fillText('Erase Data', UI.title.textErase[0], UI.title.textErase[1])
}

function mouseUpUITitle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                    scene = 'Game'
                    state = ''
                    aaa = 0
                }
            }
        }
    }
}

function keyDownTitle(key) {

}

function keyUpTitle(key) {

}