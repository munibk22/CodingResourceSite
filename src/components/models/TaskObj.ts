export interface TaskItem{
  id?:number,
  item?:string,
  checked?:boolean,
  taskgroup?:string,
  subgroup?:string,
  code?:string,
  description?:string,
}

export default class TaskObj implements TaskItem{
  constructor(
    private _id:number =0,
    private _item:string ='',
    private _checked:boolean = false,
    private _taskgroup:string='',
    private _subgroup:string='',
    private _code:string='',
    private _description:string='',
  ){}
  
get id():number{
  return this._id;
}
public set id(id:number){
  this._id= id;
}
public get item():string{
return this._item;
}

public set item(item:string){
  this._item = item;
}

public get checked():boolean{
  return this._checked;
}
public set checked(isChecked:boolean){
  this._checked = isChecked;
}

public get taskgroup():string{
  return this._taskgroup;
}
public set taskgroup(taskgroup:string){
  this._taskgroup= taskgroup;
}

public get subgroup():string{
  return this._subgroup;
}
public set subgroup(subgroup:string){
  this._subgroup= subgroup;
}

public get code():string{
  return this._code;
}
public set code(code:string){
  this._code = code;
}

public get description():string{
  return this._description;
}
public set description(desc:string){
  this._description = desc;
}
}