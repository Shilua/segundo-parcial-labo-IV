import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoAprobacion'
})
export class EstadoAprobacionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
