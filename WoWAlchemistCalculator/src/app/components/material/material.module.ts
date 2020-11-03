import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
	
import { MatToolbarModule }     from '@angular/material/toolbar';
import { MatIconModule }        from '@angular/material/icon';
import { MatButtonModule }      from '@angular/material/button';
import { MatMenuModule }        from '@angular/material/menu';
import { MatDividerModule }     from '@angular/material/divider';
import { MatListModule}         from '@angular/material/list';
import { MatFormFieldModule}    from '@angular/material/form-field';
import { MatInputModule }       from '@angular/material/input';
import { MatCardModule }        from '@angular/material/card';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        CommonModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,        
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
    declarations: []
})

export class MaterialModule {}