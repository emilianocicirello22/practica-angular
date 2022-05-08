import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FormsModule} from '@angular/forms';
import { ProvinciasComponent } from './provincias/provincias.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProvinciasComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
