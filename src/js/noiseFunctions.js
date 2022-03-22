export default class NoiseMaker{
  pieceWise = (inputArray, newLength) => {
    const biteSize = (inputArray.length/newLength);
    let outputArray = [];
    for(let i = 0; i<newLength; i++){
      const x = i*biteSize;
      let coVal;
      if(Math.ceil(x)>=inputArray.length){
        coVal = 0;
      }else{
        coVal = Math.ceil(x);
      }
      const m = inputArray[coVal]-inputArray[Math.floor(x)];
      const b = inputArray[Math.floor(x)];
      outputArray.push(m*(x-Math.floor(x))+b);
    }
    return outputArray.map((x)=> parseFloat(x.toFixed(4)));
  }

  makeSomeNoise = (randomArray) =>{
    const Phase1a = this.pieceWise(randomArray, randomArray.length/8);
    const Phase2a = this.pieceWise(randomArray, randomArray.length/4);
    const Phase3a = this.pieceWise(randomArray, randomArray.length/3);
    const Phase1b = this.pieceWise(Phase1a, randomArray.length);
    const Phase2b = this.pieceWise(Phase2a, randomArray.length);
    const Phase3b = this.pieceWise(Phase3a, randomArray.length);
    return Phase1b.map((p1, index)=>{
      return parseFloat((p1+(Phase2b[index]*.25)+(Phase3b[index]*.125)+(randomArray[index]*.05)).toFixed(4));
    }); 
  }

  randArray = (length) => {
    let output = [0];
    for(let i = 0;i<length-2;i++){
      output.push(Math.floor(Math.random()*100));
    }
    output.push(0);
    return output;
  }

  swapXY = (array) =>{
    let output = [];
    for(let i =0; i<array[0].length;i++){
      let segment=[];
      for(let j = 0; j<array.length; j++){
        segment.push(array[j][i])
      }
      output.push(segment);
    }
    return output;
  }

  noise2D = (x,y) =>{
    let output=[];
    for(let i = 0; i<x; i++){
      output.push(this.makeSomeNoise(this.randArray(y)).map((v)=>parseFloat((v/175).toFixed(4))));
    }
    const squarePhase1 = this.swapXY(output);
    const squarePhase1Half = squarePhase1.map((subRay)=>{
      let output = [];
      for(let i =0; i<subRay.length;i++){
        output.push(subRay[i]/2);
      }
      return output;
    })
    const squarePhase2 = squarePhase1Half.map((subArray)=>this.makeSomeNoise(subArray));
    const outputPlus = this.swapXY(squarePhase2);
    return outputPlus;
  }

  enhance = (mapIn,x,y) =>{
    const phase1 = mapIn.map((line)=> this.pieceWise(line,y));
    const phase2 = this.swapXY(phase1);
    const phase3 = phase2.map((liney)=> this.pieceWise(liney,x));
    const output = this.swapXY(phase3);
    return output;
  }
}