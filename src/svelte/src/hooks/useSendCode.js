
import {
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { codeMap } from '../../../code';

export const useSendCode = (chapter) => {
  if (qiankunWindow && qiankunWindow.setGlobalState) {
    qiankunWindow?.setGlobalState({
      code: codeMap['svelte'][chapter]
    })
  }
}