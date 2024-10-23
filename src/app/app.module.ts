import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { KanbanTaskComponent } from './kanban-task/kanban-task.component';

// arrastrar y soltar
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';

//task
import { MatCardModule } from '@angular/material/card'; // Importa el módulo de tarjetas
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component'; // Importa el módulo de botones

import { FormsModule } from '@angular/forms';

//select
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    KanbanColumnComponent,
    KanbanTaskComponent,
    LayoutComponent,
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
