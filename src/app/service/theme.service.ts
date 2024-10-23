import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private modoOscuro = false;

  isModoOscuro(): boolean {
    return this.modoOscuro;
  }

  setModoOscuro(modoOscuro: boolean): void {
    this.modoOscuro = modoOscuro;
    document.body.classList.toggle('modo-oscuro', modoOscuro);
  }
}
