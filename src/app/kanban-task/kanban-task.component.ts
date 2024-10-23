import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from '../service/api.service';



export interface KanbanItem {
  title: string;
  subtitle: string;
  description: string;
  horas_estimadas: string;
  estado: string;
}
@Component({
  selector: 'app-kanban-task',
  templateUrl: './kanban-task.component.html',
  styleUrls: ['./kanban-task.component.scss'],

}


)

export class KanbanTaskComponent {
  getBorderClasses(column: string): string { //Esta cadena será el nombre de la clase de borde que se aplicará a las tarjetas.
    switch (column) {
      case 'estimado':
        return 'border-danger'; // Si el valor de column es 'estimado', la función devuelve la cadena 'border-danger'. Esto significa que las tarjetas en la columna "Estimado" tendrán un borde rojo (clase Bootstrap border-danger).
      case 'porEstimar':
        return 'border-primary';
      case 'enviado':
        return 'border-secondary';
      case 'desarrollo':
        return 'border-success';
      default:
        return '';
        
    }
    
    
  }
  balance: { capacidad: number; Eficiencia_Cotizaciones: number; cumplimiento: number } = {
    capacidad: 50, 
    Eficiencia_Cotizaciones: 75,
    cumplimiento: 90,
  };

  selectedClient: string = '';

  todo: any[] = [];
  done: any[] = [];
  enviado: any[] = [];
  desarrollo: any[] = [];

  generateCards() {
    // Limpia los arreglos antes de asignar nuevos valores
    this.todo = [];
    this.done = [];
    this.enviado = [];
    this.desarrollo = [];


    // Lógica para generar las tarjetas según el cliente seleccionado
    switch (this.selectedClient) {
      case '1': // Pisende
        //columna estimar
        this.todo.push({ title: 'Proyecto: B2C-PISENDE',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0006', description: 'Descripción: Opciones de la barra de busqueda',horas_estimadas: '5 horas', estado: 'Cerrado'  });
        this.todo.push({ title: 'Proyecto: B2C-PISENDE',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/105398ad89a7e49f556ea65bfcafcefecf650206/', subtitle: 'Consecutivo: P672-C01-RQ0011', description: 'Descripción: [TEST] COTIZACIÓN-Calculadora', horas_estimadas: '3 horas' , estado: 'Pendiente' });
        this.todo.push({ title: 'Proyecto: B2C-PISENDE ', enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/49539ed9c890e63efa808e847ab571bc2391085d/',subtitle: 'Consecutivo:P672-C01-RQ0015', description: 'Descripción: [TEST] COTIZACIÓN-Calculadora Ajuste ', horas_estimadas: '6 horas', estado: 'Nuevo' });
        //columna por estimar
        this.done.push({ title: 'Proyecto: B2C-PISENDE ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C03-RQ0085 ', description: 'Descripción: Ajustes SEO',horas_estimadas: '7 horas', estado: 'Aceptado'  });
        this.done.push({ title: 'Proyecto: B2C-PISENDE ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0003 ', description: 'Descripción: [TEST] Nombre de los Items desde la entidad ERP',horas_estimadas: '2 horas', estado: 'Rechazado'  });
        //columna enviado
        this.enviado.push({ title: 'Proyecto: B2C-PISENDE ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0006', description: 'Descripción: Opciones de la barra de busqueda',horas_estimadas: '8 horas', estado: 'Aceptado'  });
        this.enviado.push({ title: 'Proyecto: B2C-PISENDE',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0005 ', description: 'Descripción: Proceso antes del error: Nuevo filtro con botones',horas_estimadas: '3 horas', estado: 'Pendiente'  });
        this.enviado.push({ title: 'Proyecto: B2C-PISENDE',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0002 ', description: 'Descripción: Cliente solicita aumentar el scroll en las paginas de producto.',horas_estimadas: '1 horas', estado: 'Nuevo'  });
        //columna desarrollo
        this.desarrollo.push({ title: 'Proyecto: B2C-PISENDE',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0004', description: 'Descripción: ¿Es posible crear una etiqueta como la de "Marca de Promoción"',horas_estimadas: '6 horas', estado: 'Nuevo'  });
        break;
    }
    switch (this.selectedClient) {
      case '2': // Herculess
        //columna estimar
        this.todo.push({ title: 'Proyecto: B2B Resortes Hercules',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ0018', description: 'Descripción: [TEST] Visual Fotos 360°' });
        this.todo.push({ title: 'Proyecto: B2B Resortes Hercules',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ0020', description: 'Descripción: [TEST] COTIZAR: REQUERIMIENTO NOTIFICACIONES' });
        //columna por estimar
        this.done.push({ title: 'Proyecto: B2B Resortes Hercules ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ0022 ', description: 'Descripción: [TEST] Descripción del item' });
        this.done.push({ title: 'Proyecto: AGR- RESORTES HERCULES ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P562-C03-RQ0001 ', description: 'Descripción: Cliente solicita en el modulo de autogestiòn de proveedores con los siguiente' });
        //columna enviado
        this.enviado.push({ title: 'Proyecto: B2B Resortes Hercules ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C03-RQ0004', description: 'Descripción: COTIZACION: Modificar desarrollo existente de bodegas' });
        //columna desarrollo
        this.desarrollo.push({ title: 'Proyecto: B2B Resortes Hercules',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ0033', description: 'Descripción: COTIZAR: INFORME PEDIDOS CLIENTE' });
        break;
    }
    switch (this.selectedClient) {
      case '3': // Itacol
        //columna estimar
        this.todo.push({ title: 'Proyecto: B2C-ITACOL',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0006', description: 'Descripción: Opciones de la barra de busqueda',horas_estimadas: '5 horas', estado: 'Cerrado'  });
        this.todo.push({ title: 'Proyecto: B2C-ITACOL',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C01-RQ0011', description: 'Descripción: [TEST] COTIZACIÓN-Calculadora', horas_estimadas: '3 horas' , estado: 'Pendiente' });
        this.todo.push({ title: 'Proyecto: B2C-ITACOL ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo:P672-C01-RQ0015 ', description: 'Descripción: [TEST] COTIZACIÓN-Calculadora Ajuste ', horas_estimadas: '6 horas', estado: 'Nuevo' });
        //columna por estimar
        this.done.push({ title: 'Proyecto: B2C-ITACOL ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C03-RQ0085 ', description: 'Descripción: Ajustes SEO',horas_estimadas: '7 horas', estado: 'Aceptado'  });
        this.done.push({ title: 'Proyecto: B2C-ITACOL ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0003 ', description: 'Descripción: [TEST] Nombre de los Items desde la entidad ERP',horas_estimadas: '2 horas', estado: 'Rechazado'  });
        //columna enviado
        this.enviado.push({ title: 'Proyecto: B2C-ITACOL ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0006', description: 'Descripción: Opciones de la barra de busqueda',horas_estimadas: '8 horas', estado: 'Aceptado'  });
        this.enviado.push({ title: 'Proyecto: B2C-ITACOL',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0005 ', description: 'Descripción: Proceso antes del error: Nuevo filtro con botones',horas_estimadas: '3 horas', estado: 'Pendiente'  });
        this.enviado.push({ title: 'Proyecto: B2C-ITACOL',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0002 ', description: 'Descripción: Cliente solicita aumentar el scroll en las paginas de producto.',horas_estimadas: '1 horas', estado: 'Nuevo'  });
        //columna desarrollo
        this.desarrollo.push({ title: 'Proyecto: B2C-ITACOL',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P672-C04-RQ0004', description: 'Descripción: ¿Es posible crear una etiqueta como la de "Marca de Promoción"',horas_estimadas: '6 horas', estado: 'Nuevo'  });
        break;

    }
    switch (this.selectedClient) {
      case '4': // bianchi
        //columna estimar
        this.todo.push({ title: 'Proyecto: B2B Resortes BIANCHI',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ0018', description: 'Descripción: [TEST] Visual Fotos 360°', horas_estimadas: '8 horas', estado: 'Aceptado'  });
        this.todo.push({ title: 'Proyecto: B2B Resortes BIANCHI', subtitle: 'Consecutivo: P541-C02-RQ0020', description: 'Descripción: [TEST] COTIZAR: REQUERIMIENTO NOTIFICACIONES',horas_estimadas: '6 horas', estado: 'Nuevo'  });
        //columna por estimar
        this.done.push({ title: 'Proyecto: B2B Resortes BIANCHI ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ0022 ', description: 'Descripción: [TEST] Descripción del item', horas_estimadas: '3 horas' , estado: 'Pendiente' });
        this.done.push({ title: 'Proyecto: AGR- RESORTES BIANCHI ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P562-C03-RQ0001 ', description: 'Descripción: Cliente solicita en el modulo de autogestiòn de proveedores con los siguiente', horas_estimadas: '5 horas', estado: 'Cerrado'  });
        //columna enviado
        this.enviado.push({ title: 'Proyecto: B2B Resortes BIANCHI ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C03-RQ0004', description: 'Descripción: COTIZACION: Modificar desarrollo existente de bodegas', horas_estimadas: '3 horas' , estado: 'Pendiente' });
        //columna desarrollo
        this.desarrollo.push({ title: 'Proyecto: B2B Resortes BIANCHI',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ0033', description: 'Descripción: COTIZAR: INFORME PEDIDOS CLIENTE', horas_estimadas: '5 horas' , estado: 'Pendiente' });
        break;

    }
    switch (this.selectedClient) {
      case '5': // ofimarcas
        //columna estimar
        this.todo.push({ title: 'Proyecto: B2B Resortes OFIRMARCAS',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ0058', description: 'Descripción: [TEST] Visual Fotos 360°', horas_estimadas: '8 horas', estado: 'Aceptado'  });
        this.todo.push({ title: 'Proyecto: B2B Resortes OFIRMARCAS', subtitle: 'Consecutivo: P541-C02-RQ0040', description: 'Descripción: [TEST] COTIZAR: REQUERIMIENTO NOTIFICACIONES',horas_estimadas: '6 horas', estado: 'Nuevo'  });
        //columna por estimar
        this.done.push({ title: 'Proyecto: B2B Resortes OFIRMARCAS ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ0062 ', description: 'Descripción: [TEST] Descripción del item', horas_estimadas: '3 horas' , estado: 'Pendiente' });
        this.done.push({ title: 'Proyecto: AGR- RESORTES OFIRMARCAS ', subtitle: 'Consecutivo: P562-C03-RQ0001 ', description: 'Descripción: Cliente solicita en el modulo de autogestiòn de proveedores con los siguiente', horas_estimadas: '5 horas', estado: 'Cerrado'  });
        //columna enviado
        this.enviado.push({ title: 'Proyecto: B2B Resortes OFIRMARCAS ',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C03-RQ0034', description: 'Descripción: COTIZACION: Modificar desarrollo existente de bodegas', horas_estimadas: '3 horas' , estado: 'Pendiente' });
        //columna desarrollo
        this.desarrollo.push({ title: 'Proyecto: B2B Resortes OFIRMARCAS',enlace: 'https://proyectos.siesaecommerce.com/requerimientos/detail/9dad153cb6b5f35636574108ab41b8ed3a6dd4ff/', subtitle: 'Consecutivo: P541-C02-RQ023', description: 'Descripción: COTIZAR: INFORME PEDIDOS CLIENTE', horas_estimadas: '5 horas' , estado: 'Pendiente' });
        break;
      default:
        console.log('Cliente no reconocido');
        break;
    }
    
  }


  drop(event: CdkDragDrop<{ title: string; subtitle: string; description: string; }[]>) {
    if (event.previousContainer === event.container) {
      // Mover dentro de la misma lista
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Mover entre listas
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    // Si la lista de destino estaba vacía después del movimiento, agregar el elemento
    if (event.container.data.length === 0) {
      event.container.data.push(event.item.data);
    }
    // Si la lista de origen estaba vacía después del movimiento, eliminar el elemento de la lista de origen
    if (event.previousContainer.data.length === 0) {
      const index = event.previousIndex !== undefined ? event.previousIndex : 0;
      event.previousContainer.data.splice(index, 1);
    }
  }
  showFullDescription: boolean[] = [];

  // Función para alternar la visibilidad de la descripción completa
  toggleDescription(index: number) {
    this.showFullDescription[index] = !this.showFullDescription[index];
  }
  
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerRequerimientosPosventa();
  }

  clientes: any[] = []; 

 
  obtenerRequerimientosPosventa(): void {
    this.apiService.getRequerimientosPosventa().subscribe(
      (data) => {
        console.log('Datos de la API:', data);
        this.clientes = data;
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }
}
  
  



  

  









