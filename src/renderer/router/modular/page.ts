import type { Routes } from '@youliso/granule/types/Router';

const routes: Routes = {
  home: {
    component: () => import('@/renderer/views/pages/home')
  },
  about: {
    component: () => import('@/renderer/views/pages/about')
  }
};

export default routes;
