import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';
import {IonicRatingModule} from 'ionic-rating';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductDetailsPageRoutingModule,
        IonicRatingModule,
        TranslateModule.forChild(),
        ComponentModule,
    ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}
