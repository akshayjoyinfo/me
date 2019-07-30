import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './components/nav/nav.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ NavComponent, NavigationBarComponent ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    RouterModule
  ],
  exports: [ NavigationBarComponent, NavComponent ]
})
export class CoreModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
