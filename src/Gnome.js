class Gnome {
    constructor(imagePath, gameField) {
        this.imagePath = imagePath;
        this.element = document.createElement('img'); 
        this.element.setAttribute('alt', 'Gnome');
        this.element.className = 'gnome'; 
        gameField.appendChild(this.element);
        this.hidden = true;
        this.hide();
    }

    show() {
        this.hidden = false;
        this.element.src = this.imagePath;
        this.element.style.display = 'block';
    }

    hide() {
        this.hidden = true;
        this.element.style.display = 'none';
    }

    isHidden() {
        return this.hidden;
    }

    setPosition(top, left) {
        this.element.style.position = 'absolute';
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;
    }
}


export default Gnome;