import { generatePath } from 'react-router';

interface BaseRoutes {
 login : string;
 hotelCollection : string;
 hotelEdit: string;
}

const appBaseRoutes : BaseRoutes = {
 login: '/',
 hotelCollection: '/hotel-collection',
 hotelEdit: '/hotel-edit',
}

interface RouterSwitchRoutes extends BaseRoutes {
 hotelEdit: string;
}

export const hotelEditRouteParams = {
    id : 'id',
}

export const routerSwitchRoutes : RouterSwitchRoutes =  {
    ...appBaseRoutes,
    hotelEdit: `/${appBaseRoutes.hotelEdit}/:${hotelEditRouteParams.id}`,
  }

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

  type RoutesLinks = Omit<BaseRoutes, 'hotelEdit'> & {hotelEdit : (id) => string};

export const routesLinks : RoutesLinks = {
 ...appBaseRoutes,
 hotelEdit: (id) => generatePath(routerSwitchRoutes.hotelEdit, {id})
}