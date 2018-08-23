import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import{AgmCoreModule} from '@agm/core';



import { AppComponent } from './app.component';
import { ReadUpdateComponent } from './components/read-update/read-update.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';


// changes i added to the app which would be useful
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StateComponent } from './components/state/state.component';


const appRoutes: Routes = [
  {path: 'contacts', component : ContactsComponent},
  {path: 'readUpdate', component: ReadUpdateComponent},
 {path: 'state', component: StateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ReadUpdateComponent,
    ContactsComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCxALE_lodtBfGnsBO845TLuF5uu7-CXg'
    })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
