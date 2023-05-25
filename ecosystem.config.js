module.exports = {
    apps : [{
      name: 'next-app',
      script: 'yarn',
      args: 'start',
      watch: '.',
      ignore_watch: ['node_modules', 'logs'],
      env: {
        NODE_ENV: 'production'
      }
    }]
  }
  