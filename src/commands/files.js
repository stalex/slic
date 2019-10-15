const {getProject, getFiles, mapFilePath} = require('../api')
const {Command, flags} = require('@oclif/command')
const  {cli} = require('cli-ux')

class FilesCommand extends Command {
  async run() {
    const {flags, args} = this.parse(FilesCommand)
    cli.action.start('fetching')
    const project = await getProject(args.project)
    const files =  await getFiles(project)
    cli.action.stop()
    const formatter = mapFilePath
    this.log(formatter(files).join('\n'))
  }
}

FilesCommand.description = `Describe the command here
...
Extra documentation goes here
`

FilesCommand.flags = {
  output: flags.string({char: 'o', description: 'directory to output', default: '.'}),
  download: flags.boolean({char: 'd', description: 'download', default: false}),
}

FilesCommand.args = [{name: 'project'}]

module.exports = FilesCommand
