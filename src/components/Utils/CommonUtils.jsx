
export const url = 'http://localhost:8082';
export const post = async (uri,data)=>{
 try {  
  const response = await  fetch(uri,{
   method:'POST',
   body:data,
  
  }) ;
 const responseData = await response.json();
 if(responseData){
  return responseData;
  console.log(responseData);
 }
 } catch (error) {
console.log(error);  
 }
};

export const get = async (uri)=>{
 try {  
  const url = 'http://localhost:8082'+uri;
  const response = await fetch(url);
 const data = await response.json();
 if(data){
  console.log(data);
  return data;
 }
 } catch (error) {
console.log(error); 
console.log(error);
return data={}; 
 }
}

setTimeout(() => {
 $('a').attr('target','_blank');

}, 2000);
export default function CommonUtils(){
 const url = 'http://localhost:8082/getLinks';

}