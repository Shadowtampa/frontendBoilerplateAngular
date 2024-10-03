import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToughtComponent } from './components/toughts/tought/tought.component';
import { CreateToughtComponent } from './components/toughts/create-tought/create-tought.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListToughtsComponent } from './components/toughts/list-toughts/list-toughts.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { DeleteToughtComponent } from './components/toughts/delete-tought/delete-tought.component';
import { EditToughtComponent } from './components/toughts/edit-tought/edit-tought.component';
import { ButtonLoadMoreComponent } from './components/toughts/list-toughts/button-load-more/button-load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToughtComponent,
    CreateToughtComponent,
    ListToughtsComponent,
    DeleteToughtComponent,
    EditToughtComponent,
    ButtonLoadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, //sim isso ta errado, mas to mexendo em uma versao mais antiga; o ideal seria eu mexer no app.config, mas eu flaguei pra ele não gerar esse arquivo 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
