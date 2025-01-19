#!/usr/bin/env node

import fs from "fs"
import { FILE_NAME, INFO_MESSAGE } from "../src/config.js"
import { argv } from "node:process";
import { add, update, del } from "../src/commands.js";

(() => {
  if(!fs.existsSync(FILE_NAME)) {
    const content = []

    fs.appendFile(FILE_NAME, JSON.stringify({ content }), (err) => {
      if(err) throw err
    })
  }

  const args = argv.slice(2);
  
  const option = args[0]

  if((option === "--help" || option === "-h") && args === 1) {
    console.log(INFO_MESSAGE)
  }

  if(option === 'add') {
    add(args)
    return
  }

  if(option === 'update') {
    update(args)
    return
  }

  if(option === 'delete') {
    del(args)
    return
  }

  console.error(INFO_MESSAGE)
})();
