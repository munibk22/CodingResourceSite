import TaskList from '../models/TaskList'

interface DOMList{
 ul?: HTMLUListElement,
 clear():void,
 render(taskList:TaskList):void,
}

export default class ListTemplate implements DOMList{
 static instance:ListTemplate = new ListTemplate();
 ul:HTMLUListElement
 private constructor(
  // private _ul:HTMLUListElement = document.createElement('ul')
    ){     
  this.ul = document.querySelector('[data-group-tasks]') as HTMLUListElement
    }

// public get ul():HTMLUListElement{
//  return this._ul;
// }
  public clear():void{
   $(this.ul).empty();
  }

  public render(List: TaskList): void {
   this.clear();
   List.taskList.forEach(task=>{
const li = document.createElement('li') as HTMLLIElement;
$(li).addClass('task')
.data('taskItem');

const check = document.createElement('input') as HTMLInputElement;
check.type='checkbox';
check.id = task?.id.toString();
check.tabIndex= 0;
check.checked = task.checked;
li.append(check);
check.addEventListener('change',()=>{
 task.checked = !task.checked;
 List.save();
})
      })
  }


 
}