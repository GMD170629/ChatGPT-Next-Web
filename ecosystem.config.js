module.exports = {
    apps : [{
      name: 'next-app',
      interpreter: 'yarn',
      interpreter_args: 'start',
      watch: '.',
      ignore_watch: ['node_modules', 'logs'],
      env: {
        NODE_ENV: 'production'
      }
    }]
  }
  