
onclick = () => {
 console.log(!detailElem.hasAttribute("open"))
 if(!detailElem.hasAttribute("open"))
 getTaskList(); 
}

// $('#displaytasks').on('click',()=>null);
export async function getTaskList(){
 try {
  const taskResponse = await fetch
  // ('http://localhost:8082/files');
  ('http://localhost:8082/gettasklist');
  const taskList = await taskResponse.json();
  console.log(taskList);
  if(taskList != null && taskList.length >0)
  displayTasks(taskList);  
 } catch (error) {
  console.log(error);
 }
};

const displayTasks=(taskList)=>{
 // taskList = taskList.filter();
 var temp = "<tr>";  
 let li = "<tr>";
 let li2 ="";
 $(li2).addClass('dis')

if(taskList.length > 0)
var taskArry = Object.keys(taskList[0]);
console.log(taskArry); 
taskArry.forEach(taskele => {
 li += `<th>${taskele}</th>`;
});
taskList.forEach(task => {
 const {taskId, taskgroup, subgroup, topic, code, definition, description, html, css, website, inpFile} = task;
 console.log(taskArry.length);   
li2 += `<tr>
        <td>${taskId} </td>
        <td>${taskgroup} </td>
        <td>${subgroup} </td>
        <td>${topic} </td>
        <td>${code} </td>
        <td>${definition} </td>
        <td>${description} </td>
        <td>${html} </td>
        <td>${css} </td>     
        <td><a href=${website}>${website.slice(8,30)} </td>   
        <td class=imgholder><img src=data:image/png;base64,${inpFile} alt=test data-table-img loading=lazy/></td>
        </tr> 
        `;
        
      // document.getElementById("ItemPreview").src = "data:image/jpeg;base64," + task.data;
      // li2 += `<td><img src="data:image/png;base64,${task.inpFile}" width="350px" /></td></tr>`;
  // temp += "<tr>";
  // temp += "<td>" + task.taskId + "</td>";
  // temp += "<td>" + Object.values(task)+ "</td></tr>";
  // temp += "<td>" + task.subgroup + "</td>";
  // temp += "<td>" + task.topic+ "</td></tr>";
  // temp += "<td>" + task.code+ "</td></tr>";
  // temp += "<td>" + task.definition+ "</td></tr>";
  // temp += "<td>" + task.description+ "</td></tr>";
  // temp += "<td>" + task.html+ "</td></tr>";
  // temp += "<td>" + task.css+ "</td></tr>";
  // temp += "<td>" + task.website+ "</td></tr>";
});
document.getElementById("tasksTable").innerHTML = `${li} ${li2} `;
// document.getElementById('data').innerHTML = temp;

 };
