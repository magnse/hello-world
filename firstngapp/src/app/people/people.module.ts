import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NewPersonComponent } from './new-person/new-person.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PeopleComponent
  ],
  declarations: [PeopleComponent, ProfileComponent, NewPersonComponent]
})
export class PeopleModule { }
