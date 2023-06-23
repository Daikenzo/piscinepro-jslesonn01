// export default function main(stage) {
//     stage = createBackground(stage);
//     return stage;
// }

// function customCircle(size, position) {
//     let circle = new createjs.Shape();
//     circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, size);
//     circle.x = position.x;
//     circle.y = position.y;

//     circle.addEventListener('click', (e) => {
//         e.stopPropagation();
//         circle.vy += 1;
//     })

//     circle.vx = circle.vy = 1;

//     // stage.on('changeLaCouleur', () => {
//     //     circle.graphics.beginFill("red").drawCircle(0, 0, size);
//     // })

//     circle.on('tick', (e) => {
//         let randomNumber = Math.random();
//         e.currentTarget.vy += randomNumber / 10;
//         e.currentTarget.y += e.currentTarget.vy;

//         if (e.currentTarget.y > 600) {
//             e.currentTarget.parent.removeChild(e.currentTarget)
//         }
//     })

//     return circle;
// }

// function createCircle(e, stage) {
//     let position = { x: stage.mouseX, y: stage.mouseY };
//     let circle = customCircle(5, position)
//     stage.addChild(circle);
// }

// function createBackground(stage) {
//     let graphics = new createjs.Graphics();
//     let rectangle = new createjs.Shape(graphics)
//     graphics.beginFill('white');
//     graphics.drawRect(0, 0, stage.width, stage.height)

//     rectangle.addEventListener('pressmove', (e) => {
//         createCircle(e, stage)
//     })

//     stage.addChild(rectangle);

//     return stage;
// }
let stage;
let radius = 30

export default function main(st) {
    stage = st;
    createBackground();
    createCircle(120,80,"red");
    createCircle(120,80,"blue");
    createCircle(120,80,"green");
    return stage;
}

function createCircle(paramX, paramY, color) {
    let gr = new createjs.Graphics();
    let circle = new createjs.Shape(gr);

    circle.pace = 1;
    circle.canMove = false
    //circle.addEventListener('tick', onCircleTick)
    // circle.addEventListener('click', onCircleClick)
    circle.addEventListener('pressmove', onCircleMove)
    
    gr.setStrokeStyle(2)
    gr.beginStroke('black')
    gr.beginFill(color).drawCircle(0, 0, radius);
    circle.x = paramX;
    circle.y = paramY;
    stage.addChild(circle);
}

function onCircleClick(e) {

}

function onCircleTick(e) {
    let tg = e.currentTarget;

    if (!tg.canMove) return

    tg.x += tg.pace
    if (tg.x > stage.width) {
        tg.pace *= -1
    }
}


function onCircleMove(e){
    e.currentTarget.x = stage.mouseX
    e.currentTarget.y = stage.mouseY
}
// createjs.Touch.enable(stage) // permet l'utilisation de l'écran tactile
function createBackground() {
    let gr = new createjs.Graphics()
    let bg = new createjs.Shape(gr)

    gr.beginFill('#ffffff')
    gr.drawRect(0, 0, stage.width, stage.height)

    stage.addChild(bg)
}