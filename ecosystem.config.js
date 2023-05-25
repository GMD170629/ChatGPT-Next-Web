module.exports = {
    apps : [{
      name: 'gpt-qingline-net',
      interpreter: 'yarn',
      interpreter_args: 'start',
      watch: '.',
      ignore_watch: ['node_modules', 'logs'],
      env: {
        // 指定.env文件的路径
        PATH: './.env'
      }
    }]
  }
  