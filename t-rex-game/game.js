
let gameMap = [1, 0, 2, 0, 2, 0, 2, 0, 0, 0]

let ti = 0
let dir = "right"


    function drawMap() {
        m.innerHTML = ``
        for (let i = 0; i < gameMap.length; i++) {
            if (gameMap[i] == 0) {
                m.innerHTML += `<div></div>`
            } else if (gameMap[i] == 1) {
                m.innerHTML += `<div class="t-rex ${dir}"></div>`
            } else if (gameMap[i] == 2) {
                m.innerHTML += `<div class="cactus"></div>`
            }
        }
    }
    function action() {
        switch (event.key) {
            case "ArrowLeft":
                if (ti > 0) {
                    gameMap[ti] = 0
                    ti--
                    gameMap[ti] = 1
                    dir = "left"
                    drawMap()
                }
            break
            case "ArrowRight":
                if (ti < gameMap.length - 1) {
                    gameMap[ti] = 0
                    ti++
                    gameMap[ti] = 1
                    dir = "right"
                    drawMap()
                }
            break
        }
    }
    drawMap()