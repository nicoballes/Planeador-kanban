import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  ngAfterViewInit() {
    this.showSidebar();
  }

  showSidebar() {
    const contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.classList.add('hovered');
    }
  }

  hideSidebar() {
    const contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.classList.remove('hovered');
    }
  }
}


