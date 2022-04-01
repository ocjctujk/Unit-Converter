import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'length',
        pathMatch: 'full'
      },
      {
        path: 'length',
        loadChildren: () =>
          import('./length/length.module').then((m) => m.LengthPageModule),
      },
      {
        path: 'area',
        loadChildren: () =>
          import('./area/area.module').then((m) => m.AreaPageModule),
      },
      {
        path: 'weight',
        loadChildren: () =>
          import('./weight/weight.module').then((m) => m.WeightPageModule),
      },
      {
        path: 'volume',
        loadChildren: () =>
          import('./volume/volume.module').then((m) => m.VolumePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
