import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

export const mainRoute: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'role',
        component: RoleComponent,
      },
    ],
  },
];
