module.exports = {
    apps : [{
      name: 'gpt-qingline-net',
      script: 'yarn',
      args: 'start',
      watch: '.',
      ignore_watch: ['node_modules', 'logs'],
      env: {
        NODE_ENV: 'production'
      }
    }]
  }
  