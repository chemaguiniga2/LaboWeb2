import { RouterModule, Routes } from '@angular/router';
//Se tienen que importar todas las rutas que vamos a utilizar
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { FichaxboxComponent } from './componentes/fichaxbox/fichaxbox.component';
import { FichapcComponent } from './componentes/fichapc/fichapc.component';
import { FichaplayComponent } from './componentes/fichaplay/fichaplay.component';
import { FichaswitchComponent } from './componentes/fichaswitch/fichaswitch.component';
import { JuegosxboxComponent } from './componentes/juegosxbox/juegosxbox.component';
import { JuegosplayComponent } from './componentes/juegosplay/juegosplay.component';
import { Madden20Component } from './componentes/madden20/madden20.component';
import { SpidermanComponent } from './componentes/spiderman/spiderman.component';
import { ReddeadredemptionComponent } from './componentes/reddeadredemption/reddeadredemption.component';
import { Fifa20Component } from './componentes/fifa20/fifa20.component';
import { Gears5Component } from './componentes/gears5/gears5.component';
import { GtavComponent } from './componentes/gtav/gtav.component';

const APP_ROUTES: Routes = [
//Se inicializan todas las rutas que vamos a utilizar.
    { path: 'principal', component: PrincipalComponent },
    { path: 'acercade', component: AcercadeComponent },
    { path: 'consolas', component: ConsolasComponent },
    { path: 'consolas/xbox', component: FichaxboxComponent },
    { path: 'consolas/pc', component: FichapcComponent },
    { path: 'consolas/play', component: FichaplayComponent },
    { path: 'consolas/switch', component: FichaswitchComponent },
    { path: 'consolas/xbox/juegos', component: JuegosxboxComponent },
    { path: 'consolas/play/juegos', component: JuegosplayComponent },
    { path: 'consolas/play/juegos/madden', component: Madden20Component },
    { path: 'consolas/play/juegos/spiderman', component: SpidermanComponent },
    { path: 'consolas/play/juegos/reddeadredemption', component: ReddeadredemptionComponent },
    { path: 'consolas/xbox/juegos/fifa', component: Fifa20Component },
    { path: 'consolas/xbox/juegos/gears', component: Gears5Component },
    { path: 'consolas/xbox/juegos/gta', component: GtavComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'principal' },
];
//Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
//y dentro del arreglo de imports[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);