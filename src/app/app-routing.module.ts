import { InfoComponent } from './info/info.component';
import { AppComponent } from './app.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: InfoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'loginsignup', component: LoginsignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
