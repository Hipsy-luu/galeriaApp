import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Componentes personalizados para usar en la app
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
    declarations : [
        IonicSelectableModule
    ],
    exports: [
        IonicSelectableModule
    ],
    //Importamos el modulo te Ionic para tener sus componentes disponibles
    // dentro de los componentes personalizados 
    imports : [
        IonicModule,
        CommonModule,
        FormsModule,
        IonicSelectableModule
    ]
})
export class ComponentsModule {}
