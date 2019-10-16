sliclili
====

stoplight.io cli 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/slicli.svg)](https://npmjs.org/package/slicli)
[![Downloads/week](https://img.shields.io/npm/dw/slicli.svg)](https://npmjs.org/package/slicli)
[![License](https://img.shields.io/npm/l/slicli.svg)](https://github.com/stalex/slicli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g slicli
$ slicli COMMAND
running command...
$ slicli (-v|--version|version)
slicli/0.0.0 darwin-x64 node-v10.15.3
$ slicli --help [COMMAND]
USAGE
  $ slicli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`slicli autocomplete [SHELL]`](#slicli-autocomplete-shell)
* [`slicli files [PROJECT]`](#slicli-files-project)
* [`slicli get [PROJECT] [FILE]`](#slicli-get-project-file)
* [`slicli help [COMMAND]`](#slicli-help-command)
* [`slicli list [NAMESPACE]`](#slicli-list-namespace)
* [`slicli view [PROJECT]`](#slicli-view-project)

## `slicli autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ slicli autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ slicli autocomplete
  $ slicli autocomplete bash
  $ slicli autocomplete zsh
  $ slicli autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.4/src/commands/autocomplete/index.ts)_

## `slicli files [PROJECT]`

Describe the command here

```
USAGE
  $ slicli files [PROJECT]

OPTIONS
  -d, --download       download
  -o, --output=output  [default: .] directory to output

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/files.js](https://github.com/stalex/slicli/blob/v0.0.0/src/commands/files.js)_

## `slicli get [PROJECT] [FILE]`

Describe the command here

```
USAGE
  $ slicli get [PROJECT] [FILE]

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/get.js](https://github.com/stalex/slicli/blob/v0.0.0/src/commands/get.js)_

## `slicli help [COMMAND]`

display help for slicli

```
USAGE
  $ slicli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `slicli list [NAMESPACE]`

Describe the command here

```
USAGE
  $ slicli list [NAMESPACE]

OPTIONS
  -s, --wns  with namespace

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/list.js](https://github.com/stalex/slicli/blob/v0.0.0/src/commands/list.js)_

## `slicli view [PROJECT]`

Describe the command here

```
USAGE
  $ slicli view [PROJECT]

OPTIONS
  -n, --name=name  name to print
  -s, --wns        with namespace

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/view.js](https://github.com/stalex/slicli/blob/v0.0.0/src/commands/view.js)_
<!-- commandsstop -->
