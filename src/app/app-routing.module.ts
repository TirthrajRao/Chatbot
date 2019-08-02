import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WetherComponent } from './wether/wether.component';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path: 'wether',
    component: WetherComponent
  },
  
  { path: 'chat', loadChildren: () => import(`./chat/chat.module`).then(m => m.ChatModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
