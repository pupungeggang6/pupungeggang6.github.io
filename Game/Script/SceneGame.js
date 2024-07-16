function loopGame() {
    displayGame()
    move()
}

function move() {
    aaa += 1
}

function displayGame() {
    drawSceneUIInit()

    contextUI.fillStyle = 'White'
    contextUI.fillRect(UI.game.buttonBack[0], UI.game.buttonBack[1], UI.game.buttonBack[2], UI.game.buttonBack[3])
    contextUI.strokeRect(UI.game.buttonBack[0], UI.game.buttonBack[1], UI.game.buttonBack[2], UI.game.buttonBack[3])
    contextUI.fillStyle = 'Black'

    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    let tempRect = [aaa, 0, 40 + aaa, 0, aaa, 40, aaa, 40, 40 + aaa, 0, 40 + aaa, 40]
    
    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0) {
            tempRect[i] = tempRect[i] / canvas.width * 2 - 1
        } else {
            tempRect[i] = canvas.height - tempRect[i]
            tempRect[i] = tempRect[i] / canvas.height * 2 - 1
        }
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferVertex)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tempRect), gl.STATIC_DRAW)
    //bufferIndex = gl.createBuffer()
    //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferIndex)
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferTexture)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0,  0.0,
        1.0,  0.0,
        0.0,  1.0,
        0.0,  1.0,
        1.0,  0.0,
        1.0,  1.0,
    ]), gl.STATIC_DRAW)

    gl.drawArrays(gl.TRIANGLES, 0, 6)

    tempRect = [0, aaa, 40, aaa, 0, 40 + aaa, 0, 40 + aaa, 40, aaa, 40, 40 + aaa]
    
    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0) {
            tempRect[i] = tempRect[i] / canvas.width * 2 - 1
        } else {
            tempRect[i] = canvas.height - tempRect[i]
            tempRect[i] = tempRect[i] / canvas.height * 2 - 1
        }
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferVertex)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tempRect), gl.STATIC_DRAW)

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferTexture)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0,  0.0,
        1.0,  0.0,
        0.0,  1.0,
        0.0,  1.0,
        1.0,  0.0,
        1.0,  1.0,
    ]), gl.STATIC_DRAW)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
}

function mouseUpUIGame(x, y, button) {

}

function keyDownGame(key) {

}

function keyUpGame(key) {

}