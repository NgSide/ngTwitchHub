import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'addsource' })
export class AddSource implements PipeTransform {
  transform(value: any, args: any): string {
      const content = value.trim();
    return `$(args): $(content)`;
  }
}