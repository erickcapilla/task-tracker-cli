import fs from 'fs';
import { FILE_NAME, ADD_MESSAGE } from "./config.js"

export const add = (args) => {
  if(args.length !== 2) {
    console.log(ADD_MESSAGE)
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

    console.log(content)

    if(content.length > 0) {
      const ids = content.map(task => task.id)
      let max = Math.max(...ids)

      console.log(max++)
      task.id = max++
    }

    content.push(task);
    console.log(content)

    fs.writeFile(FILE_NAME, JSON.stringify({ content }), (err) => {
      if(err) throw err;
      console.log("Added")
    })
  })
}
