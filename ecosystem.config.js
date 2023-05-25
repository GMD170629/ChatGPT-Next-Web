module.exports = {
    apps : [{
      name: 'gpt-qingline',
      script    : 'yarn',
      args      : 'start',
      interpreter: '/bin/bash',
      watch: '.',
      ignore_watch: ['node_modules', 'logs'],
      cwd: '.'
    }]
  }
