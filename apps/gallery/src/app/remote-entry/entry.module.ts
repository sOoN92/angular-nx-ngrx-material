import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
