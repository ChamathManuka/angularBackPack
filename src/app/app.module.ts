   import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OtherComponent } from './other.component';
import { AnotherComponent } from './another/another.component';
import { DataBindingComponent } from './data-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayComponent } from './two-way.component';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';


@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
