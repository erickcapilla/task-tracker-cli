export const FILE_NAME = "tasky_db.json";

export const INFO_MESSAGE = `
  Usage: tasky [option] <describe> \n
  Options: \n
  \t --help, -h \t\t\t show usage \n
  \t add <describe> \t\t Add new tasky
  \t update <id> <new describe> \t Update task with id
  \t delete <id> \t\t\t Delete task with id \n
  \t mark-in-progress \t\t Mark in progress task with id
  \t mark-done \t\t\t Mark done task with id \n
  \t list \t\t\t\t List all tasks
  \t list <status> \t\t\t List tasks by status (done, todo or in-progress)
`

export const ADD_MESSAGE = "Usage: tasky add <describe>"
export const UPDATE_MESSAGE = "Usage: tasky update <id> <new describe>"
export const DELETE_MESSAGE = "Usage: tasky delete <id>"
export const PROGRESS_MESSAGE = "Usage: tasky mark-in-progress <id>"
export const DONE_MESSAGE = "Usage: tasky mark-done <id>"
export const LIST_MESSAGE = "Usage: tasky list <status>\n\n\tStatus: done, todo or in-progress"
