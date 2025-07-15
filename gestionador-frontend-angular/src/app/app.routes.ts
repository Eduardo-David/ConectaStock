import { Routes } from '@angular/router';
import { InitialComponent } from './pages/initial/initial.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InterfaceProveedorComponent } from './pages/interface-proveedor/interface-proveedor.component';
import { InterfaceVendedorComponent } from './pages/interface-vendedor/interface-vendedor.component';


export const routes: Routes = [
    {path:'', component: InitialComponent},
    {path:'login/proveedor',
        component: LoginComponent,
        data: {title:'Proveedor', icon:'IconProveedor'}
    },
    {
        path:'login/vendedor',
        component: LoginComponent,
        data: {title:'Vendedor', icon:'IconVendedor'}
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'interface/proveedor',
        component: InterfaceProveedorComponent
    },
    {
        path:'interface/vendedor',
        component: InterfaceVendedorComponent
    }

];
