import { Component, Input, Output, EventEmitter,HostListener,ElementRef  } from '@angular/core';
import { ThemeService } from '../service/theme.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
  
})


export class LayoutComponent {
  
  sidebarVisible = false;
  modoOscuro: boolean;

  constructor(private elementRef: ElementRef, private themeService: ThemeService) {
    this.modoOscuro = this.themeService.isModoOscuro();
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  @HostListener('document:click', ['$event'])
  closeSidebar(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.sidebarVisible = false;
    }
  }

  toggleModoOscuro() {
    this.modoOscuro = !this.modoOscuro;
    this.themeService.setModoOscuro(this.modoOscuro);
  }
}