let pac_x = 10
let pac_y = 1

let coin_x1 = parseInt( 1 + Math.random() * 9 )
let coin_y1 = parseInt( 1 + Math.random() * 9 )

let coin_x2 = parseInt( 1 + Math.random() * 9 )
let coin_y2 = parseInt( 1 + Math.random() * 9 )

let bomb_x1 = parseInt( 1 + Math.random() * 9 )
let bomb_y1 = parseInt( 1 + Math.random() * 9 )

let bomb_x2 = parseInt( 1 + Math.random() * 9 )
let bomb_y2 = parseInt( 1 + Math.random() * 9 )

let score  = 0
let health  = 100


function action(){

    switch ( event.key ) {
        case "ArrowDown" : pac_x++ ;
            if ( pac_x > 10 ) {
                pac_x = 1
            }
        break
        case "ArrowUp" : pac_x-- ;
            if ( pac_x < 1 ) {
                pac_x = 10
            } 
        break
        case "ArrowRight" : pac_y++ ;
            if ( pac_y > 10 ) {
                pac_y = 1
            }
        break
        case "ArrowLeft" : pac_y-- ;
            if ( pac_y < 1 ) {
                pac_y = 10
            }
        break 
    }

    if ( pac_x == coin_x1 && pac_y == coin_y1 ) {
        score += 10
    }
    if ( pac_x == coin_x2 && pac_y == coin_y2 ) {
        score += 10
    }
    
    if ( pac_x == bomb_x1 && pac_y == bomb_y1 ) {
        health -= 20
    }
    if ( pac_x == bomb_x2 && pac_y == bomb_y2 ) {
        health -= 20
    }
    if (score == 100) {
        gameMap.innerHTML = document.write(`<h1 style="text-align:center;"> Yeeee !!! You Win!!!</h1>`)
    }else if (health == 0) {
        gameMap.innerHTML = document.write(`<h1 style="text-align:center;">Try again!!!</h1>`)
    }

    renderMap()
}

function renderMap() {
    gameMap.innerHTML = ``
    for ( let x = 1 ; x <= 10 ; x++ ) {

        for ( let y = 1 ; y <= 10 ; y++ ) {

            if ( x == pac_x && y == pac_y ) {
                gameMap.innerHTML += `<div class="pac"></div>`
            } else if (x == coin_x1 && y == coin_y1) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x == coin_x2 && y == coin_y2) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x == bomb_x1 && y == bomb_y1) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            } else if (x == bomb_x2 && y == bomb_y2) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            } else {
                gameMap.innerHTML += `<div></div>`
            }
        }
    }
    gameScore.innerHTML = `<br>Score: ${score}.`
    gameHealth.innerHTML = `<br>Health: ${health}.`
}

renderMap()





