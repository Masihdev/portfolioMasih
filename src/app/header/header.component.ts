import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenuBurgar() {
    // document.getElementById('menu')?.classList.add('d-none');
    //  let test = document.getElementById('menu-img') as HTMLImageElement;
    //  test.src  = 'assets/img/multiply-2-16.ico';
  
  
        document.getElementById('menu-img1')?.classList.add('d-none');
        document.getElementById('menu-img')?.classList.remove('d-none');
        document.getElementById('menu')?.classList.add('d-none');
        document.getElementById('test')?.classList.add('d-none');

  }

showMenuClose() {
  // document.getElementById('menu')?.classList.add('d-none');
  //  let test = document.getElementById('menu-img') as HTMLImageElement;
  //  test.src  = 'assets/img/multiply-2-16.ico';


      document.getElementById('menu-img')?.classList.add('d-none');
      document.getElementById('menu-img1')?.classList.remove('d-none');
      document.getElementById('menu')?.classList.remove('d-none');
      document.getElementById('test')?.classList.remove('d-none');

}
}

