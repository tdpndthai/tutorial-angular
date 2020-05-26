import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {
  //truyền sự kiện từ component con ra component cha dùng @Output
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>(); //thêm EventEmiiter để thông báo rằng chúng là properties có thể set từ bên ngoài
  @Output('bpCreated') bluePrinted = new EventEmitter<{ serverName: string, serverContent: string }>(); //dùng alias
  // newServerName = '';
  //newServerContent = '';


  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    //console.log(nameInput.value)
    //phát sự kiệm kèm dữ liệu là serverName,serverContent
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrinted.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
