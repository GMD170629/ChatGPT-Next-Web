module.exports = {
    apps : [{
      name: 'gpt-qingline',
      script    : 'yarn',
      args      : 'start',
      interpreter: '/bin/bash',
      // 应用程序启动模式，这里设置的是 cluster_mode（集群），默认是fork
      exec_mode: 'cluster',
      // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
      instances: 4,
      watch: '.',
      ignore_watch: ['node_modules', 'logs'],
      cwd: '.'
    }]
  }
