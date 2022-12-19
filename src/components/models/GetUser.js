export async function GetUser(nameForm){
 console.log("GetUser CALL")
 const url ='http://localhost:8082/getUser';
//  fetch(url,{
//     method:'POST',
//   body:  nameForm,
//   mode:'cors'

//  }).then((response) => {
//   console.log(response);
//   response.json().then((data) => {
//       console.log(data);
//   });
// });
try {
 const response = await fetch(url,{
  method:'POST',
  body:  nameForm,
  mode:'cors'
 })
 console.log(response);
 const data = await response.json();
 console.log(data);
 if(data.userName != null){
console.log(data.userName);
const rightGrid = $('#gridSection3').find('[data-user-details]');
// $("#nameElement").html(`<span class=loggedInUser>${data.userName}</span>
$(rightGrid).append(`<ul class=loggedInUser>
<li>${data.userName}</li>
<li> ${data.password}</li></ul>
`);
sessionStorage.setItem(JSON.stringify(data.userName),(JSON.stringify(data.id)));
 }else
 console.log("user not found");
 console.log(data);
} catch (error) {
 console.log(error); 
}
}

$("[data-username-submit").on('click',function(e){
 e.preventDefault();
 const userInfo=  document.getElementById('nameform');
 const nameForm =  new FormData(userInfo);
  GetUser(nameForm);
});


function successMessage(){
 console.log("Name Login success");
}



// $("[data-username-submit").on('click',function(e){
//  e.preventDefault();
//  GetUser();
 // const test = new BulletPointUtil();
 // console.log($('[data-bullet-point]').val());
 //  pointArry = BulletPointUtil($('[data-bullet-point]').val());
 // console.log("point added")
 // console.log(pointArry);  
// });