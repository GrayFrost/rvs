import { actions } from './state';

export const apps = [
  {
    name: 'react',
    entry: '//localhost:5001',
    container: '#react-app', // 挂载子应用的dom
    activeRule: '/react', // 路由匹配规则
    props: {
      setGlobalState: actions.setGlobalState
    }
  },
  {
    name: 'vue',
    entry: '//localhost:5002',
    container: '#vue-app',
    activeRule: '/vue',
    props: {
      setGlobalState: actions.setGlobalState
    }
  },
  {
    name: 'svelte',
    entry: '//localhost:5003',
    container: '#svelte-app',
    activeRule: '/svelte',
    props: {
      setGlobalState: actions.setGlobalState
    }
  },
  {
    name: 'solid',
    entry: '//localhost:5004',
    container: '#solid-app',
    activeRule: '/solid',
    props: {
      setGlobalState: actions.setGlobalState
    }
  }
]
