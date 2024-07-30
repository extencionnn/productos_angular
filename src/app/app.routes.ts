import { Routes } from '@angular/router';
import { ListarProductosComponent } from './componentes/listar-productos/listar-productos.component';
import { EditarProductosComponent } from './componentes/editar-productos/editar-productos.component';
import { CrearProductosComponent } from './componentes/crear-productos/crear-productos.component';
import { ListarCategoriasComponent } from './componentes/listar-categorias/listar-categorias.component';
import { EditarCategoriasComponent } from './componentes/editar-categorias/editar-categorias.component';
import { CrearCategoriasComponent } from './componentes/crear-categorias/crear-categorias.component';

export const routes: Routes = [
    {
        path:'',
        component: ListarProductosComponent
    },
    {
        path:'listar-productos',
        component: ListarProductosComponent
    },
    {
        path:'editar-producto/:id',
        component: EditarProductosComponent
    },
    {
        path:'crear-producto',
        component: CrearProductosComponent
    },
    {
        path:'listar-categorias',
        component: ListarCategoriasComponent
    },
    {
        path:'editar-categoria/:id',
        component: EditarCategoriasComponent
    },
    {
        path:'crear-categoria',
        component: CrearCategoriasComponent
    },
];
