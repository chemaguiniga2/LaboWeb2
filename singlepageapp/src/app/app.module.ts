import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/comunes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';

import { APP_ROUTING } from './app.routes';
import { GtavComponent } from './componentes/gtav/gtav.component';
import { Gears5Component } from './componentes/gears5/gears5.component';
import { Fifa20Component } from './componentes/fifa20/fifa20.component';
import { Madden20Component } from './componentes/madden20/madden20.component';
import { SpidermanComponent } from './componentes/spiderman/spiderman.component';
import { ReddeadredemptionComponent } from './componentes/reddeadredemption/reddeadredemption.component';
import { Fichafifa20Component } from './componentes/fichafifa20/fichafifa20.component';
import { Fichagears5Component } from './componentes/fichagears5/fichagears5.component';
import { FichagtavComponent } from './componentes/fichagtav/fichagtav.component';
import { Fichamadden20Component } from './componentes/fichamadden20/fichamadden20.component';
import { FichaspidermanComponent } from './componentes/fichaspiderman/fichaspiderman.component';
import { FichasreddeadredemptionComponent } from './componentes/fichasreddeadredemption/fichasreddeadredemption.component';
import { FichapcComponent } from './componentes/fichapc/fichapc.component';
import { FichaplayComponent } from './componentes/fichaplay/fichaplay.component';
import { FichaxboxComponent } from './componentes/fichaxbox/fichaxbox.component';
import { FichaswitchComponent } from './componentes/fichaswitch/fichaswitch.component';
import { JuegosxboxComponent } from './componentes/juegosxbox/juegosxbox.component';
import { JuegosplayComponent } from './componentes/juegosplay/juegosplay.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    AcercadeComponent,
    ConsolasComponent,
    GtavComponent,
    Gears5Component,
    Fifa20Component,
    Madden20Component,
    SpidermanComponent,
    ReddeadredemptionComponent,
    Fichafifa20Component,
    Fichagears5Component,
    FichagtavComponent,
    Fichamadden20Component,
    FichaspidermanComponent,
    FichasreddeadredemptionComponent,
    FichapcComponent,
    FichaplayComponent,
    FichaxboxComponent,
    FichaswitchComponent,
    JuegosxboxComponent,
    JuegosplayComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
