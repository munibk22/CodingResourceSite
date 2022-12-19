$("[data-link-submit]").on('click',saveLink);

export function saveLink(e){
e.preventDefault();
console.log(e);
 const linkData = document.getElementById("linkForm");
 const linkForm = new FormData(linkData);
 const url ='http://localhost:8082/postLink';
 fetch(url,{
  method:'POST',
  body: linkForm,
 })
 .then(res=>res.json())
 .then(data=>console.log(data))
 .catch(err=>console.log(err))
 return false;
}