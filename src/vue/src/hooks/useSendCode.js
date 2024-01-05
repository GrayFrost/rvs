import { onMounted } from 'vue';
import {
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { codeMap } from '../../../code';

export const useSendCode = (chapter) => {
  onMounted(() => {
    if (qiankunWindow && qiankunWindow.setGlobalState) {
      qiankunWindow?.setGlobalState({
        code: codeMap['vue'][chapter]
      })
    }
  })
}