import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserComponent } from 'app/views/user-management/user.component';
import { DeliveryPersonComponent } from 'app/views/deliveryP-management/delivery-person.component';
import { ProductManagementComponent } from 'app/views/product-management/product-management.component';
import { CategoryManagementComponent } from 'app/views/category-management/category-management.component';
import { GiftManagementComponent } from 'app/views/gift-management/gift-management.component';
import { ReclamationManagementComponent } from 'app/views/reclamation-management/reclamation-management.component';
import { StatComponent } from 'app/StatComponent/stat/stat.component';
import { AssociationComponent } from 'app/views/association/association.component';
import { DonationComponent } from 'app/views/donation/donation.component';
import { RequestComponent } from 'app/views/request/request.component';
import { DonationAssociationComponent } from 'app/views/donation-association/donation-association.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UserComponent },
    { path: 'deliveryPersons', component: DeliveryPersonComponent },
    { path: 'product-management', component: ProductManagementComponent },
    { path: 'category-management', component: CategoryManagementComponent },
    { path: 'gift-management', component: GiftManagementComponent },
    { path: 'reclamation-management', component: ReclamationManagementComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    {path:'home',component:StatComponent},
    { path: 'associations',   component: AssociationComponent },
   
    { path: 'donations',   component: DonationComponent },
    { path: 'requests',   component: RequestComponent },
    { path: 'DonationAssociation',  component: DonationAssociationComponent },

];
