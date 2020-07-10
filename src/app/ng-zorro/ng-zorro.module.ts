import { NgModule } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
    exports: [
        NzCardModule,
        NzButtonModule,
        NzInputModule,
        NzAlertModule,
        NzDrawerModule
    ],
})
export class NgZorroModule{}
