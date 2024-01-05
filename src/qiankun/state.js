import { initGlobalState } from 'qiankun'

const state = {
  code: ''
};
// 初始化 state
const actions = initGlobalState(state);

export {
  actions
}