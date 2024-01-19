import { createEffect } from 'solid-js';
import {
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { codeMap } from '../../../code';

export const useSendCode = (chapter) => {
  createEffect(() => {
    if (qiankunWindow && qiankunWindow.setGlobalState) {
      qiankunWindow?.setGlobalState({
        code: codeMap['solid'][chapter]
      })
    }
  })
}