export default (array)=>{
  // [0.25,0.31,0.33,0.37,0.4,0.42,0.46]
  const dataVisuals = [
    {color:'blue', value:0.25},
    {color:'DodgerBlue', value:0.31},
    {color:'Beige', value:0.35},
    {color:'LimeGreen', value:0.405},
    {color:'darkgray', value:0.46},
    {color:'white', value:0.9}
  ];
  return array.map(arg=>{
    return arg.map(arg2=>{
      if(arg2 <=dataVisuals[0].value){
        return dataVisuals[0].color;
      }else if(arg2>dataVisuals[0].value&&arg2<=dataVisuals[1].value){
        return dataVisuals[1].color;
      }else if(arg2>dataVisuals[1].value&&arg2<=dataVisuals[2].value){
        return dataVisuals[2].color;
      }else if(arg2>dataVisuals[2].value&&arg2<=dataVisuals[3].value){
        return dataVisuals[3].color;
      }else if(arg2>dataVisuals[3].value&&arg2<=dataVisuals[4].value){
      return dataVisuals[4].color;
      }else if(arg2>dataVisuals[4].value&&arg2<=dataVisuals[5].value){
        return dataVisuals[5].color;
        }
    })
  })
}