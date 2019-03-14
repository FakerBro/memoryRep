const memoryGame = {
  tileCount : 20, //liczba klocków
  tileOnRow : 5, //liczba klocków na rząd
  divBoard : null, //div z planszą gry
  divScore : null, //div z wynikiem gry
  tiles : [], //tutaj trafi wymieszana tablica klocków
  tilesChecked : [], //zaznaczone klocki
  moveCount : 0, //liczba ruchów
  tilesImg : [ //grafiki dla klocków
    'title_1.png',
    'title_2.png',
    'title_3.png',
    'title_4.png',
    'title_5.png',
    'title_6.png',
    'title_7.png',
    'title_8.png',
    'title_9.png',
    'title_10.png'
  ]
}


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
}
}
