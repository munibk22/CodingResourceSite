import {url,get} from "./CommonUtils";
const rightGrid = $('#gridSection3').find('ul[data-ul-links]');
// data-ul-links
export async function GetLinks(){
 // const url = 'http://localhost:8082/getLinks';
//  try {
//  console.log("GEttin Links");
//  const response = await fetch(url+'/getLinks');
//  const data = await response.json();
//  console.log(data);
//  if(data)
//  displayLinks(data);
 
// } catch (error) {
//  console.log("Failed getting Links");
//  console.log(error);
let data = await get('/getLinks')
// .then(displayLinks(data))
displayLinks(data)
}

function displayLinks(data){
 const linkHeader =`<span data-link-li >Quick Links</span>
 <hr />`;
 $(rightGrid).append(linkHeader)
 data.forEach(link=>{ 
  const liElement = `<li data-link-li><a href=${link.url}>${link.name}</a></li>
  <li data-link-li-even >${link.description}</li>
   `
  $(rightGrid).append(liElement);
 })
}

