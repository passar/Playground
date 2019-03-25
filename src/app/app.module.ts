import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { WelcomeLoopComponent } from './welcome-loop/welcome-loop.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { LoginComponent } from './login/login.component';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeLoopComponent,
    ConditionalComponent,
    LoginComponent,
    WelcomeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
