import {MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ],
})

export class MaterialModule{}