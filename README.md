# Github Opener

I got bored of opening new tabs and loading Github. So I made a thing to do it for me.

## Install

`npm install -g github_opener`

## Usage

```
$ github --help

  Usage: github [options]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -i, --issues        Go to Issues
    -p, --pull          Go to pull requests
    -n, --number <num>  Go to the issue/pull with this number
```

## Examples

- `github jackfranklin/dotfiles -i -n 5` => `github.com/jackfranklin/dotfiles/issues/5`

- `github jackfranklin/dotfiles -p` => `github.com/jackfranklin/dotfiles/pulls`

