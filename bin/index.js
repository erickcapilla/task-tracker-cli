#!/usr/bin/env node

import fs from "fs"
import { FILE_NAME } from "../src/config.js"
import { argv } from "node:process";
import { add } from "../src/commands.js";

(() => {
  if(!fs.existsSync(FILE_NAME)) {
    const content = []
    fs.appendFile(FILE_NAME, JSON.stringify({ content }), (err) => {
      if(err) throw err
    })
  }

  const args = argv.slice(2);
  
  const option = args[0]

  if(option === 'add') {
    add(args)
    return;
  }

  if(option === 'update') {
    console.log("Updating...")
    return;
  }

  console.log("Usage: tasky [option] <describe>\n\nOptions:\n")
})();
