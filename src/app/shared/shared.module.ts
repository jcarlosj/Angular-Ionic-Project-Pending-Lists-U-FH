import { NgModule } from '@angular/core';
import { PendingsPipe } from '../pipes/pendings.pipe';

@NgModule({
    declarations: [ PendingsPipe ],
    exports:      [ PendingsPipe ]
})
export class SharedModule { }
