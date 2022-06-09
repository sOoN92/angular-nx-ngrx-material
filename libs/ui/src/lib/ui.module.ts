import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NavigationComponent,
  ],
  exports: [NavigationComponent],
})
export class UiModule {}
