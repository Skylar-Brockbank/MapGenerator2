export default class artist{
  constructor(targetScreen,screenX,screenY){
    this.screen = targetScreen;
    this.brush = targetScreen.getContext('2d');
    this.screen.width = screenX;
    this.screen.height = screenY;
  }

  drawRectangle = ()=>{
    this.brush.fillStyle = "red";
    this.brush.fillRect(0,0,10,10);
    this.brush.stroke();
  }
}