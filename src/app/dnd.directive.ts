import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('class.fileover') fileover: boolean;
  @HostBinding('class.filedroped') filedroped: boolean;

  constructor(private elem: ElementRef) { }


  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileover = true;

    console.log('drag over');
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileover = false;

    console.log('drag leave');
  }

  @HostListener('drop', ['$event']) onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.filedroped = true;
    this.fileover = false;

    const files = evt.dataTransfer.files
    let inner = 'Drop File here!!!!';
    if (files.length > 0) {
      const f = files[0];
      inner += '<p> File Name: ' + f.name + ' | Type: ' + f.type + ' | Size: ' + f.size + '</p>'
      this.elem.nativeElement.innerHTML = inner;
    }

    console.log('drop');
  }
}
