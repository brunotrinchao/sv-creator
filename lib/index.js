#! /usr/bin/env node

const inquirer = require('inquirer')
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const Factory = require('./factory')
const { helper } = require('./helper')


// Questions
const Question = require('./questions')
clear();
console.log(
  chalk.bold.green(figlet.textSync(`SV Creator`, { horizontalLayout: 'full' })) + `v${process.env.npm_package_version}`
)

;(async () => {
  const options = await inquirer.prompt(Question.options)

  const name = await inquirer.prompt(Question.name(options.option))
  const _name = { nameFormat: helper.strFriendly(name.name) }
  let resp = { ...name, ..._name }

  if (options.option === 1) {
    const type = await inquirer.prompt(Question.type(_name.nameFormat))
    const format = await inquirer.prompt(Question.format)
    resp = { ...resp, ...type, ...format }
  }
  const path = await inquirer.prompt(Question.path(_name.nameFormat, options.option))

  const confirm = await inquirer.prompt(
    Question.confirm(_name.nameFormat, options)
  )
  return { ...options, ...resp, ...path, ...confirm }
})()
  .then((resp) => {
    new Factory(resp)
  })
  .catch(console.error)