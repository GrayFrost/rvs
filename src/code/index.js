import {
  reactCode as reactCode01,
  vueCode as vueCode01,
  svelteCode as svelteCode01,
} from './Chapter01';
import {
  reactCode as reactCode02,
  vueCode as vueCode02,
  svelteCode as svelteCode02,
} from './Chapter02';
import {
  reactCode as reactCode03,
  vueCode as vueCode03,
  svelteCode as svelteCode03,
} from './Chapter03';
import {
  reactCode as reactCode05,
  vueCode as vueCode05,
  svelteCode as svelteCode05,
} from './Chapter05';
import {
  reactCode as reactCode06,
  vueCode as vueCode06,
  svelteCode as svelteCode06,
} from './Chapter06';
import {
  reactCode as reactCode07,
  vueCode as vueCode07,
  svelteCode as svelteCode07,
} from './Chapter07';

export const reactCodeMap = {
  '01': reactCode01,
  '02': reactCode02,
  '03': reactCode03,
  '05': reactCode05,
  '06': reactCode06,
  '07': reactCode07,
}

export const vueCodeMap = {
  '01': vueCode01,
  '02': vueCode02,
  '03': vueCode03,
  '05': vueCode05,
  '06': vueCode06,
  '07': vueCode07,
}

export const svelteCodeMap = {
  '01': svelteCode01,
  '02': svelteCode02,
  '03': svelteCode03,
  '05': svelteCode05,
  '06': svelteCode06,
  '07': svelteCode07,
}

export const codeMap = {
  'react': reactCodeMap,
  'vue': vueCodeMap,
  'svelte': svelteCodeMap,
}