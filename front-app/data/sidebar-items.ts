import {
  faBox,
  faBoxesStacked,
  faCalendar,
  faLocationDot,
  faStore
} from '@fortawesome/free-solid-svg-icons';
import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: 'Administrativo',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: faLocationDot,
    href: '/wedding/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Proveedores',
    icon: faBoxesStacked,
    chipColor: 'secondary',
    href: '/wedding/providers',
  },
  {
    navlabel: true,
    subheader: 'Eventos',
  },
  {
    id: uniqueId(),
    title: 'Clientes',
    icon: faBox,
    chipColor: 'secondary',
    href: '/wedding/customers',
  },
  {
    id: uniqueId(),
    title: 'Recepciones',
    icon: faStore,
    chipColor: 'secondary',
    href: '/wedding/receptions',
  },
  {
    id: uniqueId(),
    title: 'Eventos',
    icon: faCalendar,
    chipColor: 'secondary',
    href: '/wedding/events',
  },
];

export default Menuitems;
