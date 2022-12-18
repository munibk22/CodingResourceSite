export default async function SaveTask(data,imgFormData){
 console.log("Save TaskObjext");
 const res= await fetch('http://localhost:8082/savetask',{
    method:'POST',
    body:  data,
    mode: 'no-cors',

   })
  //  .then(res=> res.json())
  const resdata = await res
  if(resdata){
   const taskForm = $('#taskform ul').find('li').get();
   sessionStorage.clear();
   taskForm.forEach((input,index)=>{
    if(index>2)
    input.lastElementChild.value = "";
   })
  }

    console.log(resdata)
}

// action="http://localhost:8082/helloname" method="post" onsubmit="handleName(e)"
    //?inpFile='+encodeURIComponent(imgFormData)
    //const res= await fetch('http://localhost:8082/savetask?inpFile='+encodeURI(imgFormData),{
    //  JSON.stringify(data),
    // headers:{   'Content-Type': 'application/x-www-form-urlencoded' } 
    // multipart/form-data; boundary=----WebKitFormBoundaryYqXJKEGl6ZNNfcRd
    // headers:{'Content-Type':'application/json'} saveTask
    // headers:{'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryYqXJKEGl6ZNNfcRd'}
      //  .then(data=> console.log(data))
  //  .catch(error=>console.log(error))