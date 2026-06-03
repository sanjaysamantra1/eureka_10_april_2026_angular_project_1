import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { UserList } from './components/user-list/user-list';
// import { ProductList } from './components/product-list/product-list';
import { Userdetails } from './components/userdetails/userdetails';
import { Productdetails } from './components/productdetails/productdetails';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { UploadVideos } from './components/upload-videos/upload-videos';
import { uploadGuard } from './guards/upload-guard';
import { canExitGuard } from './guards/can-exit-guard';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  {
    path: 'careers',
    component: Careers,
    children: [
      { path: 'permanent', component: PermanentJobs },
      { path: 'contract', component: ContractJobs },
    ],
  },
  {
    path: 'contactus',
    component: Contactus,
    canDeactivate: [canExitGuard],
  },
  { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: Userdetails },
  {
    path: 'products',
    loadComponent: () => import('./components/product-list/product-list').then((x) => x.ProductList)
  },
  { path: 'productdetails', component: Productdetails },
  {
    path: 'upload',
    component: UploadVideos,
    canActivate: [uploadGuard],
  },
  { path: '', component: Home },
  { path: '**', component: Notfound },
];
