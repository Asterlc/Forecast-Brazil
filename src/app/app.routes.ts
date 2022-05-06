import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Components
import { FormComponent } from "./components/form-component/form.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const rootRoutesConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: FormComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(rootRoutesConfig),
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule { }