export default class artist{
  constructor(targetScreen,screenX,screenY){
    this.screen = targetScreen;
    this.brush = targetScreen.getContext('2d');
    this.screen.width = screenX;
    this.screen.height = screenY;
  }

  drawRectangle = (x,y,width,height,color)=>{
    this.brush.fillStyle = color;
    this.brush.fillRect(x,y,x+width,y+height);
    this.brush.stroke();
  }
  drawHex = (x,y,d, color) =>{
    const r = d/2;
    const c = ((r)**2 - (r/2)**2)**0.5
    this.brush.fillStyle = color;
    this.brush.moveTo(x,y+d);
    this.brush.beginPath();
    this.brush.lineTo(x+c,y+r/2+d);
    this.brush.lineTo(x+2*c,y+d);
    this.brush.lineTo(x+2*c,y-r+d);
    this.brush.lineTo(x+c,y-r*1.5+d);
    this.brush.lineTo(x,y-r+d);
    this.brush.lineTo(x,y+d);
    this.brush.closePath();
    this.brush.fill();
  }
  drawHexRow = (array,x,y) =>{
    const d = this.screen.width/(array.length);
    const r = d/2;
    const c = ((r)**2 - (r/2)**2)**0.5;
    for(let i = 0; i<array.length; i++){
      this.drawHex(x+(i*c*2),y,d,array[i]);
    }
  }
  drawHexGrid = (array) =>{
    const d = this.screen.width/(array[0].length);
    const r = d/2;
    const c = ((r)**2 - (r/2)**2)**0.5;
    for(let i = 0; i<array.length;i++){
      if(i%2===0){
        this.drawHexRow(array[i],c,i*d*.75);
      }else{
        this.drawHexRow(array[i],0,i*d*.75);
      }
    }
  }
}