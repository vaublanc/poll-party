import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PollPartyRoutingModule } from './pollparty-routing.module';
import { PollPartyComponent } from './pollparty.component';

@NgModule({
  declarations: [
    PollPartyComponent
  ],
  imports: [
    BrowserModule,
    PollPartyRoutingModule
  ],
  providers: [],
  bootstrap: [PollPartyComponent]
})
export class PollPartyModule { }
