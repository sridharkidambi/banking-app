import { Directive,HostListener,ElementRef, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Directive({
  selector: '[appInputFormat1]'
})
export class InputFormatDirective {

  // @Input('format') format_var:string
  @Input('appInputFormat1') format_var:string
  constructor(private el:ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log('on focus');

  }


  @HostListener('blur') onBlur(){
    console.log('on blur');
    console.log(this.format_var);
    let item:string=this.el.nativeElement.value;
    if(this.format_var==='uppercase'){
      this.el.nativeElement.value=item.toUpperCase();
    }
    else{
      this.el.nativeElement.value=item.toLowerCase();
    }

  }

}
