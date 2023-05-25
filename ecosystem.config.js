module.exports = {
    apps : [{
      name: 'gpt-qingline-net',
      interpreter: 'yarn',
      interpreter_args: 'start',
      watch: '.',
      ignore_watch: ['node_modules', 'logs'],
      cwd: '.'
    }]
  }
  