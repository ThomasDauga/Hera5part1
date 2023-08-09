class Water extends Tile {
  constructor(x, y, image = "./images/water.jpg") {
    super(x, y, image);
    this.crossable=false;
  }
}
