export const apps = [
  {
    name: 'react',
    entry: '//localhost:5001',
    container: '#react-app', // 挂载子应用的dom
    activeRule: '/react', // 路由匹配规则
    props: {} // 主应用与子应用通信传值
  },
  {
    name: 'vue',
    entry: '//localhost:5002',
    container: '#vue-app',
    activeRule: '/vue',
    props: {}
  },
  {
    name: 'svelte',
    entry: '//localhost:5003',
    container: '#svelte-app',
    activeRule: '/svelte',
    props: {}
  }
]
