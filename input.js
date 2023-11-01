

export default class InputHandler{
    constructor(Paddle, game,ball){
        document.addEventListener("keydown", event=>{
            switch(event.keyCode){
                case 37:
                    Paddle.moveLeft()
                    break;
                    case 39:
                Paddle.moveRight()
                        break;
                        case 27:
                            game.togglePause();
                            break;
                            case 32:
                                game.start()
                                break
                                case 13:
                                    if(game.gamestate!==0&&game.gamestate!==2&&game.gamestate!==3){
                                        ball.speed={x:8, y:-8};
                                        game.gamestate=1
                                    }
                                    break
            }
        })
        document.addEventListener("keyup", event=>{
            switch(event.keyCode){
                case 37:
                    if(Paddle.speed<0)Paddle.stop()
                    break;
                    case 39:
                        if(Paddle.speed>0)Paddle.stop()
                        break;
            }
        })
    }
}