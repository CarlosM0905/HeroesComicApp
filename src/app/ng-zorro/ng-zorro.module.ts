import { NgModule } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';


@NgModule({
    exports: [
        NzCardModule,
        NzButtonModule,
        NzInputModule,
        NzAlertModule
    ],
})
export class NgZorroModule{}
