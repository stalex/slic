const {getProject} = require('../api')
const {Command, flags} = require('@oclif/command')

class ViewCommand extends Command {
  async run() {
    const {flags, args} = this.parse(ViewCommand)
    const project = await getProject(args.project)
    this.log(project)
  }
}

ViewCommand.description = `Describe the command here
...
Extra documentation goes here
`

ViewCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
  wns: flags.boolean({char: 's', description: 'with namespace', default: false}),
}

ViewCommand.args = [{name: 'project'}]

module.exports = ViewCommand
