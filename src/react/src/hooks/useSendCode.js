import { useEffect } from 'react';
import {
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { codeMap } from '../../../code';

export const useSendCode = (chapter) => {
  useEffect(() => {
    // todo 发数据
    if (qiankunWindow && qiankunWindow.setGlobalState) {
      qiankunWindow?.setGlobalState({
        code: codeMap['react'][chapter]
      })
    }
  }, []);
}