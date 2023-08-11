import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appIpFormat]'
})
export class IpFormatDirective {

  constructor(private el: ElementRef, private ngControl: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const newValue = this.formatInput(value);
    this.ngControl.control!.setValue(newValue, { emitEvent: false });
  }

  private formatInput(input: string): string {
    const maxLength = '255.255.255.255'.length; // Longitud máxima de una dirección IP
    const cleanedValue = input.replace(/[^0-9.]/g, ''); // Elimina caracteres no numéricos ni puntos
    const chunks = cleanedValue.split('.');
    const formattedChunks = chunks.map(chunk => this.formatChunk(chunk));
    const formattedValue = formattedChunks.join('.');
    return formattedValue.slice(0, maxLength); // Limita la longitud total
  }

  private formatChunk(chunk: string): string {
    return chunk.slice(0, 3); // Limita a 3 caracteres por cada segmento
  }
}
