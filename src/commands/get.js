const {getProject, getFile} = require('../api')
const {Command} = require('@oclif/command')

class GetCommand extends Command {
  async run() {
    const {args} = this.parse(GetCommand)
    const {id, default_branch} = await getProject(args.project)
    const file = await getFile({id, branch: default_branch, path: args.file})
    this.log(JSON.stringify(file, null, 2))
  }
}

GetCommand.description = `Describe the command here
...
Extra documentation goes here
`

GetCommand.args = [{name: 'project'}, {name: 'file'}]

module.exports = GetCommand
