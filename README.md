slic
====

stoplight cli 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/slic.svg)](https://npmjs.org/package/slic)
[![Downloads/week](https://img.shields.io/npm/dw/slic.svg)](https://npmjs.org/package/slic)
[![License](https://img.shields.io/npm/l/slic.svg)](https://github.com/stalex/slic/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g slic
$ slic COMMAND
running command...
$ slic (-v|--version|version)
slic/0.0.0 darwin-x64 node-v10.15.3
$ slic --help [COMMAND]
USAGE
$ slic COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`slic autocomplete [SHELL]`](#slic-autocomplete-shell)
* [`slic files [PROJECT]`](#slic-files-project)
* [`slic get [PROJECT] [FILE]`](#slic-get-project-file)
* [`slic help [COMMAND]`](#slic-help-command)
* [`slic list [NAMESPACE]`](#slic-list-namespace)
* [`slic view [PROJECT]`](#slic-view-project)

## `slic autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ slic autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ slic autocomplete
  $ slic autocomplete bash
  $ slic autocomplete zsh
  $ slic autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.4/src/commands/autocomplete/index.ts)_

## `slic files [PROJECT]`

Describe the command here

```
USAGE
  $ slic files [PROJECT]

OPTIONS
  -d, --download       download
  -o, --output=output  [default: .] directory to output

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/files.js](https://github.com/stalex/slic/blob/v0.0.0/src/commands/files.js)_

## `slic get [PROJECT] [FILE]`

Describe the command here

```
USAGE
  $ slic get [PROJECT] [FILE]

OPTIONS
  -n, --name=name  name to print
  -s, --wns        with namespace

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/get.js](https://github.com/stalex/slic/blob/v0.0.0/src/commands/get.js)_

## `slic help [COMMAND]`

display help for slic

```
USAGE
  $ slic help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `slic list [NAMESPACE]`

Describe the command here

```
USAGE
  $ slic list [NAMESPACE]

OPTIONS
  -s, --wns  with namespace

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/list.js](https://github.com/stalex/slic/blob/v0.0.0/src/commands/list.js)_

## `slic view [PROJECT]`

Describe the command here

```
USAGE
  $ slic view [PROJECT]

OPTIONS
  -n, --name=name  name to print
  -s, --wns        with namespace

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/view.js](https://github.com/stalex/slic/blob/v0.0.0/src/commands/view.js)_
<!-- commandsstop -->
