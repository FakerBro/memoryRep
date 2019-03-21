
const memoryGame = {
  this.startGame = function() {
    //czyścimy planszę
    this.divBoard = document.querySelector('.game-board');
    this.divBoard.innerHTML = '';

    //czyścimy planszę z ruchami
    this.divScore = document.querySelector('.game-score');
    this.divScore.innerHTML = '';

    //czyścimy zmienne (bo gra może się zacząć ponownie)
    this.tiles = [];
    this.tilesChecked = [];
    this.moveCount = 0;

    //generujemy tablicę numerów kocków (parami)
    for (let i=0; i<tileCount; i++) {
      this.tiles.push(Math.floor(i/2));
    }

    //i ją mieszamy
    for (let i=this.tileCount-1; i>0; i--) {
      const swap = Math.floor(Math.random()*i);
      const tmp = this.tiles[i];
      this.tiles[i] = this.tiles[swap];
      this.tiles[swap] = tmp;
    }

    for (let i=0; i<this.tileCount; i++) {
      const tile = document.createElement('div');
      tile.classList.add("game-tile");
      this.divBoard.appendChild(tile);

      tile.dataset.cardType = this.tiles[i];
      tile.dataset.index = i;

      tile.style.left = 5 + (tile.offsetWidth+10) * (i%this.tileOnRow) + 'px'
      tile.style.top = 5 + (tile.offsetHeight+10) * (Math.floor(i/this.tileOnRow)) + 'px';

      tile.addEventListener('click', this.tileClick.bind(this));
    }
  }
}