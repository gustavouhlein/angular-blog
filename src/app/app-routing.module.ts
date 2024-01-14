import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PublicacaoComponent } from './pages/publicacao/publicacao.component';

const routes: Routes = [
	{
		path:'',
		component:HomeComponent
	},
	{
		path:'publicacao/:id',
		component:PublicacaoComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
