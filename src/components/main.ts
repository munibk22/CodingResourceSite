import './style.css'
import FullList from './models/TaskList'
import ListItem from './models/TaskObj'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  // Add listener to new entry form submit
  // const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement

  // itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
  //   event.preventDefault()

  //   // Get the new item value
  //   const input = document.getElementById("newItem") as HTMLInputElement
  //   const newEntryText: string = input.value.trim()
  //   if (!newEntryText.length) return

  //   // calculate item ID
  //   const itemId: number = fullList.taskList.length+1
      

  //   // create new item
  //   const newItem = new ListItem(itemId, newEntryText)
  //   // Add new item to full list
  //   fullList.addTask(newItem)
  //   // Re-render list with new item included
  //   template.render(fullList)
  // })

  // Add listener to "Clear" button
  // const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

  // clearItems.addEventListener('click', (): void => {
  //   fullList.clearList()
  //   template.clear()
  // })

  // load initial data
  fullList.load()
  // initial render of template
  template.render(fullList)
}

document.addEventListener("DOMContentLoaded", initApp) 