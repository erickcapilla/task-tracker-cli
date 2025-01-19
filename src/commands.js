import fs from 'fs';
import { FILE_NAME, ADD_MESSAGE, UPDATE_MESSAGE } from "./config.js"

export const add = (args) => {
  if(args.length !== 2) {
    console.error(ADD_MESSAGE)
    return
  }

  const date = new Date().toLocaleString()

  const task = {
    id: 1,
    description: args[1],
    status: "todo",
    createdAt: date,
    updatedAt: date,
  }

  fs.readFile(FILE_NAME, (error, data) => { 
    const { content } = JSON.parse(data)

    if(content.length > 0) {
      const ids = content.map(task => task.id)
      let max = Math.max(...ids)

      task.id = max++
    }

    content.push(task);

    fs.writeFile(FILE_NAME, JSON.stringify({ content }), (err) => {
      if(err) throw err;
    })
  })
}

export const update = (args) => {
  if(args.length !== 3) {
    console.error(UPDATE_MESSAGE)
    return
  }

  fs.readFile(FILE_NAME, (error, data) => {
    const { content } = JSON.parse(data)

    const date = new Date().toLocaleString()
    const task = content.filter(item => item.id.toString() === args[1])

    if(task < 1) {
      console.log("Task not found, wrong id.")
      return
    }

    const newTask = { ...task[0], description: args[2], updatedAt: date }

    const newContent = content.map(item => {
      return item.id.toString() === args[1] ? newTask : item
    })

    fs.writeFile(FILE_NAME, JSON.stringify({ content: newContent }), error => {
      if(error) throw error
    });
  })
}

