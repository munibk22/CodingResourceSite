export async function GetUser(nameForm){
 console.log("GetUser CALL")
 const url ='http://localhost:8082/getUser'
try {
 const response = await fetch(url,{
  method:'POST',
  body:  nameForm,
 })
 const data = await response.json();
 if(data.userName != null){
console.log(data.userName);
$("#nameElement").html(`<span class=loggedUserName>Welcome ${data.userName}</span>
<div><span> ${data.password}</span></div>
`);
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