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

export const reactCodeMap = {
  '01': reactCode01,
  '02': reactCode02,
  '03': reactCode03,
}

export const vueCodeMap = {
  '01': vueCode01,
  '02': vueCode02,
  '03': vueCode03,
}

export const svelteCodeMap = {
  '01': svelteCode01,
  '02': svelteCode02,
  '03': svelteCode03,
}

export const codeMap = {
  'react': reactCodeMap,
  'vue': vueCodeMap,
  'svelte': svelteCodeMap,
}