limitUp = innerHeight/5;
limitDown = innerHeight-10;  

let ball = new Ball(innerWidth/2, innerHeight/2, 30, 3, limitUp, limitDown);
let player1 = new player(1, limitDown/2, 300, 1000, limitUp, limitDown);
let player2 = new player(2, limitDown/2, 300, 1000, limitUp, limitDown);

class Game {

    display() {
        fill('black');
        stroke('white')
        fill('white');

        ball.display();
		player1.display();
		player2.display();

        this.score();
        this.showScore();
    }

    score() {
        if(ball.getX() < player1.getX()) {
            player2.setScore(1);
            this.restart();
        }
       if(ball.getX() > player2.getX()) {
            player1.setScore(1);
            this.restart();
        }    
    }

    showScore() {
        textSize(30);
        text(player1.getScore(), 100, 70);
        text(player2.getScore(), 1150, 70);
    }

    restart() {
        random = Math.random();
        ball.setX(innerWidth/2);
        ball.setY(innerHeight/2);
        player1.position();
        player2.position();
    }   
}