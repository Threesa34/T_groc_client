import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  expanded?:boolean;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS_superadmin = [
  {
    label: 'Navigation',
    main: [
      {
        main_state: 'superadmin',
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'dashboard',
	  },
	  {
        main_state: 'superadmin',
        state: 'componies',
        name: 'Companies',
        type: 'link',
        icon: 'store',
	  },
	  {
        main_state: 'superadmin',
        state: 'users',
        name: 'Users',
        type: 'link',
        icon: 'people_alt',
	  },
    ],
  },

];

const MENUITEMS_siteadmin = [
  {
    label: 'Navigation',
    main: [
      {
        main_state: 'siteadmin',
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'dashboard',
	  },
	  {
        main_state: 'siteadmin',
        state: 'employees',
        name: 'Employees',
        type: 'link',
        icon: 'people_alt',
	  },
	  {
        main_state: 'siteadmin',
        state: 'locations',
        name: 'Locations',
        type: 'link',
        icon: 'location_on',
	  },
	  {
        main_state: 'siteadmin',
        state: 'manufacturals',
        name: 'Manufacturals',
        type: 'link',
        icon: 'store',
	  },
	  {
        main_state: 'siteadmin',
        state: 'vendors',
        name: 'Vendors',
        type: 'link',
        icon: 'store',
	  },
	  {
        main_state: 'siteadmin',
        state: 'catagories',
        name: 'Catagories',
        type: 'link',
        icon: 'category',
	  },
	  {
        main_state: 'siteadmin',
        state: 'products',
        name: 'Products',
        type: 'link',
        icon: 'list',
	  },
	  {
        main_state: 'siteadmin',
        state: 'product_units',
        name: 'Product Units',
        type: 'link',
        icon: 'list',
	  },
	  {
        main_state: 'siteadmin',
        state: 'stok_points',
        name: 'Stock Points',
        type: 'link',
        icon: 'domain',
	  },
	  {
        main_state: 'siteadmin',
        state: 'offers',
        name: 'Offers',
        type: 'link',
        icon: 'loyalty',
	  },
	  {
        main_state: 'siteadmin',
        state: 'purchase',
        name: 'Purchase Order',
        type: 'link',
        icon: 'assignment',
	  },
	  {
        main_state: 'siteadmin',
        state: 'goods_reciept',
        name: 'Goods Reciept',
        type: 'link',
        icon: 'assignment',
	  },
	  /* {
        main_state: 'siteadmin',
        state: 'goods_reciept',
        name: 'Orders Distribution',
        type: 'link',
        icon: 'local_shipping',
	  },
	  {
        main_state: 'siteadmin',
        state: 'customer_feedbacks',
        name: 'Customers Feedback',
        type: 'link',
        icon: 'feedback',
	  }, */
    ],
  },

];

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'superadmin',
        short_label: 'SA',
        name: 'Super Admin',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'dashboard',
            name: 'Dashboard'
          },
          {
            state: 'products',
            name: 'Products'
          },
		  {
            state: 'users',
            name: 'Users'
          },
		  {
            state: 'localtions',
            name: 'Locations'
          },
        ]
      },
      {
        state: 'hr',
        short_label: 'HR',
        name: 'HR',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'employees',
            name: 'Employees'
          },
          {
            state: 'attendance',
            name: 'Employee Attendance'
          },
		  {
            state: 'empoyee_expences',
            name: 'Employee Expences'
          },
		  {
            state: 'working_shifts',
            name: 'Working Shifts',
            
          },
        ]
      },
      {
        state: 'siteadmin',
        short_label: 'ST',
        name: 'Siteadmin',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'dashboard',
            name: 'Dashboard'
          },
          {
            state: 'roles',
            name: 'Roles'
          },
        ]
      },
    ],
  },

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  getMenusAgainstUserRol(userRole): Menu[] {
    return eval('MENUITEMS_'+userRole);
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
