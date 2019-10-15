const  {cli} = require('cli-ux')

const {Command, flags} = require('@oclif/command')
const {mapPaths, mapPathsWithNs, getProjects} = require('../api')

class ListCommand extends Command {
  async run() {
    const {flags, args} = this.parse(ListCommand)
    cli.action.start('fetching projects')
    const projects = await getProjects(args.name)
    cli.action.stop()
    const formatter = flags.wns ? mapPathsWithNs : mapPaths
    this.log(formatter(projects).join('\n'))
  }
}

ListCommand.description = `Describe the command here
...
Extra documentation goes here
`

ListCommand.flags = {
  wns: flags.boolean({char: 's', description: 'with namespace', default: false}),
}

ListCommand.args = [{name: 'namespace'}]

module.exports = ListCommand
