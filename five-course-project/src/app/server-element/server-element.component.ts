import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  SimpleChange,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //dùng none thì định nghĩa trong css của server-element này được dùng global còn Emulated thì chỉ có trong component này thôi
})
export class ServerElementComponent implements OnInit {
  //chia sẻ biến hoặc giá trị từ component cha tới component con,ở component con thì khởi tạo @Input
  //component cha có thể truyền atribute  vào component con
  // children.component.ts
  // @Input() childMessage: string;
  // parent.component.ts
  // parentMessage: string = "Message from parent";
  // <app-children [childMessage]="parentMessage"></app-children>
  //binding thông qua bí danh (alias),lúc này element sẽ ko hoạt động
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef; //chỉ định tới thẻ đang có từ heading
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef; //chỉ tới thẻ trong content //mình có thể truy cập tới giá trị của thẻ đó ở đây

  constructor() {
    console.log('constructor server-element called!');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges server-element called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck server-element called!');
  }

  ngOnInit() {
    console.log('ngOnInit server-element called!');
    console.log('Text content is :' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called'); //cái này được chạy có 1 lần do chỉ truyền content ở app.component.html
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCheck called'); //gọi khi content thay đổi
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text content is :' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }


}
