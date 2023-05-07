import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProductManagementComponent } from 'app/views/product-management/product-management.component';
import { CategoryManagementComponent } from 'app/views/category-management/category-management.component';
import { GiftManagementComponent } from 'app/views/gift-management/gift-management.component';
import { ReclamationManagementComponent } from 'app/views/reclamation-management/reclamation-management.component';
import { ArticleComponent } from 'app/views/article/article.component';
import { AddArticleComponent } from 'app/views/add-article/add-article.component';
import { StatComponent } from 'app/views/article/stat/stat.component';
import { CommentComponent } from 'app/views/comment/comment.component';

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
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path:'product-management', component: ProductManagementComponent },
    { path:'category-management', component: CategoryManagementComponent },
    { path:'gift-management', component: GiftManagementComponent },
    { path:'reclamation-management', component: ReclamationManagementComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'article-management',         component: ArticleComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'add-article',   component: AddArticleComponent },
    { path: 'comment-management',   component: CommentComponent },

    { path: 'statArticles',   component: StatComponent },

];
