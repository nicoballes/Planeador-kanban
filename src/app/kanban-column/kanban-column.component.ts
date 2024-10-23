import { Component, Input,OnInit  } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent {
  @Input() title: string;
  tasks: any[] = []; // Declaración del arreglo tasks

  ngOnInit() {
    // Aquí puedo inicializar tasks con las tarjetas iniciales si es necesario
  }

  constructor() {
    this.title = ''; 
  }

 // Función para manejar el evento de soltar la tarea
 onTaskDropped(event: CdkDragDrop<any[]>) {
  if (event.previousContainer === event.container) {
    // Si la tarjeta se suelta en la misma lista, se reordena dentro de esa lista
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    // Si la tarjeta se suelta en una lista diferente, se mueve de una lista a otra
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
}