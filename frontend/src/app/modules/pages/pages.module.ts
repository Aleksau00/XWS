import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { TicketStoreComponent } from './ticket-store/ticket-store.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    TicketStoreComponent,
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MatFormFieldModule,
        FormsModule,
    ]
})
export class PagesModule { }
