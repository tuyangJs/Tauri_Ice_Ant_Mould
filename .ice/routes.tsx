import { createRouteLoader, WrapRouteComponent, RouteErrorComponent } from '@ice/runtime';
import type { CreateRoutes } from '@ice/runtime';
const createRoutes: CreateRoutes = ({
  requestContext,
  renderMode,
}) => ([
  {
    path: '',
    async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_layout" */ '@/pages/layout');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'layout',
          isLayout: true,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'layout',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
    errorElement: <RouteErrorComponent />,
    componentName: 'layout',
    index: undefined,
    id: 'layout',
    exact: true,
    exports: ["default"],
    layout: true,
    children: [{
      path: 'demo/ProTable',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_demo-protable" */ '@/pages/demo/ProTable');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'demo/ProTable',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'demo/ProTable',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'demo-protable',
      index: undefined,
      id: 'demo/ProTable',
      exact: true,
      exports: ["default"],
    },{
      path: 'demo/ProCard',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_demo-procard" */ '@/pages/demo/ProCard');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'demo/ProCard',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'demo/ProCard',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'demo-procard',
      index: undefined,
      id: 'demo/ProCard',
      exact: true,
      exports: ["default"],
    },{
      path: '',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_index-index" */ '@/pages/index/index');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: '/',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: '/',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'index-index',
      index: true,
      id: '/',
      exact: true,
      exports: ["default"],
    },{
      path: 'demo',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_demo-index" */ '@/pages/demo/index');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'demo',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'demo',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'demo-index',
      index: true,
      id: 'demo',
      exact: true,
      exports: ["default"],
    },{
      path: '*',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_$" */ '@/pages/$');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: '*',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: '*',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: '$',
      index: undefined,
      id: '*',
      exact: true,
      exports: ["default"],
    },]
  },
]);
export default createRoutes;
