module.exports = {
    apps : [{
      name: 'gpt-qingline-net',
      interpreter: 'yarn',
      interpreter_args: 'start',
      watch: '/root/ChatGPT-Next-Web/',
      ignore_watch: ['node_modules', 'logs']
    }]
  }
  