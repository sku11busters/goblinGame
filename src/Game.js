import Gnome from './Gnome';

class Game {
    constructor() {
        this.missedClicks = 0;
        this.score = 0;
        this.maxMisses = 5;
        this.gameField = this.createGameField();
        this.gnome = new Gnome(require('./images/goblin.png'), this.gameField);
        this.init();
    }

    createGameField() {
        const gameField = document.createElement('div');
        gameField.className = 'game-field';
        document.body.appendChild(gameField);
        
        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell'; 
            gameField.appendChild(cell);
        }
        
        return gameField;
    }

    init() {
        this.gnome.element.addEventListener('click', () => this.onGnomeClick());
        this.startGnomeCycle();
    }

    onGnomeClick() {
        if (!this.gnome.isHidden()) {
            this.score++;
            this.gnome.hide();
            console.log(`Score: ${this.score}`);
        }
    }

    getRandomPosition() {
        const rows = 4;
        const cols = 4;
        return {
            top: Math.floor(Math.random() * rows) * 100,
            left: Math.floor(Math.random() * cols) * 100,
        };
    }

    startGnomeCycle() {
        const int = setInterval(() => {
            if (this.missedClicks >= this.maxMisses) {
                alert('Game Over!');
                clearInterval(int);
                return;
            }

            if (this.gnome.isHidden()) {
                const { top, left } = this.getRandomPosition();
                this.gnome.setPosition(top, left);
                this.gnome.show();

                setTimeout(() => {
                    if (!this.gnome.isHidden()) {
                        this.missedClicks++;
                        this.gnome.hide();
                        console.log(`Missed Clicks: ${this.missedClicks}`);
                    }
                }, 1000);
            }
        }, 1500);
    }
}

export default Game;