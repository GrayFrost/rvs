import { registerMicroApps, start, initGlobalState } from 'qiankun'
import { apps } from './config';

export function registerApps() {
  try {
    registerMicroApps(apps, {
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        app => {
          console.log('before unmount', app)
        }
      ]
    })
  } catch (err) {
    console.log(err)
  }

  start({
    prefetch: 'all'
  });
}

