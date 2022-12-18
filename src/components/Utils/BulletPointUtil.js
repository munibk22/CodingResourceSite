export const BulletPointUtil= async(point="")=>{
 if(point){
 let bulletPointArry = JSON.parse(sessionStorage.getItem("PointsArry"));
 if(bulletPointArry == null)
 bulletPointArry = `'${point}'`;
 else
 bulletPointArry += `,'${point}'`;
 console.log(bulletPointArry);
 await sessionStorage.setItem("PointsArry",JSON.stringify(bulletPointArry));
}

 const result = await JSON.parse(sessionStorage.getItem("PointsArry"));
 console.log(result);
 if([result]) 
 // let pointArry = [result].map(element=>element.replace(/""/g,''));
 // console.log(pointArry);  
 // pointArry.forEach(x=>console.log(x))
 return [result];
 
}