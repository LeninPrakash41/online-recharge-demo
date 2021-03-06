import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { rechargeRouteProviders, rechargeRoutes } from './recharge.routes';
import { RechargeComponent } from './recharge.component';
import { MobileComponent } from './mobile.component';
import { ComingSoonComponent } from './comingsoon.component';
import { RechargeHistoryComponent } from './recharge-history.component';
import { PaymentComponent } from './payment.component';
import { WrapperComponent } from './wrapper.component';
import { FeedbackComponent } from './feedback.component';
import { DthComponent } from './dth.component/dth.component';
import { BillPayComponent } from './bill-pay/bill-pay.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    rechargeRoutes
  ],
  declarations: [
    RechargeComponent,
    MobileComponent,
    RechargeHistoryComponent,
    ComingSoonComponent,
    PaymentComponent,
    WrapperComponent,
    FeedbackComponent,
    DthComponent,
    BillPayComponent,
  ],
  providers: [
    rechargeRouteProviders
  ]
})
export class RechargeModule {}
