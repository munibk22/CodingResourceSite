import TaskObj,{TaskItem} from './TaskObj'

interface List{
  id:string[],
 taskList:TaskObj[];
 load():TaskItem[],
 save():boolean,
 clearList():void,
 addTask(taskObj:TaskObj):boolean,
 removeTask(id:number):boolean,
}

export default class TaskList implements List{
static instance:TaskList = new TaskList();

private constructor(
  private _taskList:TaskObj[] = [] ){    
  }
  
 get taskList():TaskObj[]{
  return this._taskList;
 }
 get id():string[]{
  return this.id;
 }
 set id(id:string){
  this.id = id;
 }
 public save():boolean{
try {
   window.localStorage.setItem("My TaskList", 
   JSON.stringify(this.taskList));
  } catch (error) {
   console.log(error);
   return false;
 }
   return true;
 }

 public load():TaskItem[]{
  const storedList: string | null = localStorage.getItem("My TaskList");
  if(storedList){    
    let parsedList:TaskObj[]=JSON.parse(storedList || "");
    parsedList.forEach((itemObj,i)=>{
      const {id,item,checked,taskgroup,subgroup,code,description}=itemObj;
      // const keys: TaskObj =Object.keys(it
      let result = Object.values(itemObj)
      
      console.log(result);
      const newTaskItem = new TaskObj(...result);
      // const newTaskItem = new TaskObj(id,item,checked,taskgroup,subgroup,code,description);
      TaskList.instance.addTask(newTaskItem);
    })
    return parsedList;
    // return JSON.parse(localStorage.getItem("My TaskList"));
  }
  const arry:TaskItem[]= [];
  return arry;
}

 
 public addTask(taskObj: TaskObj): boolean {
  try {
   this._taskList.push(taskObj);
   this.save();
  } catch (error) {
   return false;
  }
  return true;
 }
 
 public clearList(): void {
   this._taskList= [];
   // this.save();
 }
public removeTask(taskid:number):boolean{
 try {
 // window.localStorage.removeItem(JSON.stringify("My TaskList",taskid));
 this._taskList = this._taskList.filter(task=> task.id != taskid);
 this.save()
 } catch (error) {
  return false;
 }
 return true;
}


}
