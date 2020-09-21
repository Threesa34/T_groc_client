import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CatagoriesListComponent } from './catagories-list/catagories-list.component';
import { ManufacturelsComponent } from './manufacturels/manufacturels.component';
import { ProductUnitsListComponent } from './product-units-list/product-units-list.component';
import { ProductUnitDetailsComponent } from './product-unit-details/product-unit-details.component';
import { StockPointsComponent } from './stock-points/stock-points.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersDetailsComponent } from './offers-details/offers-details.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsDetailsComponent } from './goods-details/goods-details.component';
import { GoodsEntryComponent } from './goods-entry/goods-entry.component';
import { CustomersFeedbackComponent } from './customers-feedback/customers-feedback.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Siteadmin',
      status: true
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        
      }, 
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          breadcrumb: 'Dashboard',
          status: true
        },
      }, 
      {
        path: 'employees',
        component: UsersListComponent,
        data: {
          breadcrumb: 'Employees',
          status: true
        },
      }, 
      {
        path: 'employee_details/:id',
        component: UserDetailsComponent,
        data: {
          breadcrumb: 'Employee Details',
          status: true
        },
      }, 
      {
        path: 'locations',
        component: LocationsListComponent,
        data: {
          breadcrumb: 'Locations',
          status: true
        },
      }, 
      {
        path: 'location_details/:id',
        component: LocationDetailsComponent,
        data: {
          breadcrumb: 'Location Details',
          status: true
        },
      }, 
      {
        path: 'products',
        component: ProductsListComponent,
        data: {
          breadcrumb: 'Products',
          status: true
        },
      }, 
      {
        path: 'catagories',
        component: CatagoriesListComponent,
        data: {
          breadcrumb: 'Catagories',
          status: true
        },
      }, 
      {
        path: 'manufacturals',
        component: ManufacturelsComponent,
        data: {
          breadcrumb: 'Manufacturals',
          status: true
        },
      }, 
      {
        path: 'product_units',
        component: ProductUnitsListComponent,
        data: {
          breadcrumb: 'Product Units',
          status: true
        },
      }, 
      {
        path: 'product_units_details/:id',
        component: ProductUnitDetailsComponent,
        data: {
          breadcrumb: 'Product Unit Details',
          status: true
        },
      }, 
      {
        path: 'stok_points',
        component: StockPointsComponent,
        data: {
          breadcrumb: 'Stock Point',
          status: true
        },
      }, 
      {
        path: 'vendors',
        component: VendorsListComponent,
        data: {
          breadcrumb: 'Vendors',
          status: true
        },
      }, 
      {
        path: 'vendor_details/:id',
        component: VendorDetailsComponent,
        data: {
          breadcrumb: 'Vendor Details',
          status: true
        },
      }, 
      {
        path: 'offers',
        component: OffersListComponent,
        data: {
          breadcrumb: 'Offers',
          status: true
        },
      }, 
      {
        path: 'offer_details/:id',
        component: OffersDetailsComponent,
        data: {
          breadcrumb: 'Offer Details',
          status: true
        },
      }, 
      {
        path: 'purchase',
        component: PurchaseListComponent,
        data: {
          breadcrumb: 'Purchase Orders',
          status: true
        },
      }, 
      {
        path: 'purchase_details/:id',
        component: PurchaseDetailsComponent,
        data: {
          breadcrumb: 'Purchase Details',
          status: true
        },
      }, 
      {
        path: 'goods_reciept',
        component: GoodsListComponent,
        data: {
          breadcrumb: 'Goods Reciept',
          status: true
        },
      }, 
      {
        path: 'gr_details/:id',
        component: GoodsDetailsComponent,
        data: {
          breadcrumb: 'Goods Reciept Details',
          status: true
        },
      }, 
      {
        path: 'gr_entry/:id',
        component: GoodsEntryComponent,
        data: {
          breadcrumb: 'Goods Reciept Entry',
          status: true
        },
      }, 
      {
        path: 'customer_feedbacks',
        component: CustomersFeedbackComponent,
        data: {
          breadcrumb: 'Customers Feedback/Complaints',
          status: true
        },
      }, 
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteadminRoutingModule { }
