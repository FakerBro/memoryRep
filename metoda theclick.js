this.tileClick = function(element) {
    if (this.canGet) {
        //jeżeli jeszcze nie pobraliśmy 1 elementu
        //lub jeżeli index tego elementu nie istnieje w pobranych...
        if (!this.tilesChecked[0] || (this.tilesChecked[0].dataset.index !== e.target.dataset.index)) {
            this.tilesChecked.push(e.target);
            e.target.style.backgroundImage = 'url(' + this.tilesImg[e.target.dataset.cardType] + ')';
        }

        if (this.tilesChecked.length === 2) {
            this.canGet = false;

            if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                setTimeout(this.deleteTiles.bind(this), 500);
            } else {
                setTimeout(this.resetTiles.bind(this), 500);
            }
        }
    }
};

this.startGame = function() {
...

    //czyścimy zmienne (bo gra może się zacząć ponownie)
    this.tiles = [];
    this.tilesChecked = [];
    this.canGet = true;
};