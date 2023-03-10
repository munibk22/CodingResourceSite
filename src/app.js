 import { getTaskList } from "./components/models/GetTasks";
 import SaveTask from './components/models/SaveTask';
 import {BulletPointUtil} from './components/Utils/BulletPointUtil';
 import {GetUser} from './components/models/GetUser';
 import {saveLink} from './components/Utils/PostLinks';
 import {GetLinks} from './components/Utils/GetLinks';
 import CommonUtils from './components/Utils/CommonUtils';
 
 var taskList = [];
 const taskObj = {};
 const taskForm = $("#taskform");
 const submitBtn = $('[data-task-submit]');
 const removeBtn = $('[data-task-remove]');
 var pointArry=[];

 $(document).ready(function () {
  console.log("initApp"); 
  init();  
  
});

const init=()=>{
  console.log("getTaskList"); 
  GetLinks();
  // getTaskList(); 
}

/**
 *
 * @param data  
 * @return  
 * //Handle Task Form
 */ 
$(submitBtn).on('click', async(e)=>{
  e.preventDefault();
  const taskForm = await document.getElementById('taskform');
  const imgForm = document.getElementById('handleimg');
  var formData = new FormData(taskForm);
  var imgFormData = new FormData(imgForm);
const loggedInUser = $('.loggedInUser').text();
console.log(loggedInUser);
const user = sessionStorage.getItem(JSON.stringify(loggedInUser));
  const inputFile = document.getElementById("inpFile");
  const taskgroup = document.getElementById("taskgroup").value;
  // $('#inpFile');
  // if(inputFile)
  // imgFormData.append('inpFile',inputFile.files[0]);

  const taskElements = $('li[data-task]').get();
  
  // formData.set('inpFile', inpFile.files[1])
  // formData.append("taskgroup",taskgroup)
  pointArry = await BulletPointUtil();
  formData.append("bulletPoints",pointArry);
  formData.append("lastmodifiedBy",user);
  taskElements.forEach(function(task,i){
    const taskType = task.lastElementChild.tagName;
    // const taskKey = task.dataset.task;
    const taskKey = $(task).data('task');
    const taskValue = $(task).find(taskType).val();
    taskObj[taskKey]= taskValue;
    // formData.append(taskKey,taskValue)
   
  }) 
  
  // taskList.push({...taskObj});
  // window.localStorage.setItem("My Task List",JSON.stringify(taskList));
  SaveTask(formData,imgFormData);
})

  // const handleName = async(e) =>{
    async function handleName(e){
    e.preventDefault();
    // action="http://localhost:8082/helloname" method="post" onsubmit="handleName(e)"
const nameForm = document.getElementById('nameform');
// $('#nameform');
const nameFormData = new FormData(nameForm);
fetch('http://localhost:8082/helloname',{
  method: 'POST',
  body: nameFormData,
  mode: 'no-cors'
  }
  );
}

const uploadFile = file => {
  // add the file to the FormData object
  // const taskForm = document.getElementById('inpFile');
  // const fd = new FormData(document.getElementById("inpFile"))
  const fd = new FormData();
  fd.append('inpFile', file)

  // send `POST` request
  fetch('http://localhost:8082/saveFile', {
    method: 'POST',
    body: fd
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))
}
  

function removeTask(){
  removeBtn.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Removed")
  })
  $(removeBtn).on('click',(e)=>{
    e.preventDefault();
    console.log("Removed")
  });  
}



// function openTarget() {
//   const hash = location.hash.substring(1);
//   if (hash) {
//       const target = document.getElementById(hash);
//       if (target) {
//           const details = target.closest('details');
//           if (details)
//               details.open = true;
//       }
//   }
// }
// openTarget(); // onload
// window.addEventListener('hashchange', openTarget);

function handleSubmit(e){
  e.preventDefault();
  console.log("click working here")

}
$("input#addPoint").on('click',function(){
  // const test = new BulletPointUtil();
  // console.log($('[data-bullet-point]').val());
   pointArry = BulletPointUtil($('[data-bullet-point]').val());
  console.log("point added")
  console.log(pointArry);  
});


// $("[data-link-submit]").on('click',saveLink);
