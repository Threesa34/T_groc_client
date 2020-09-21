import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { CookieService } from 'ngx-cookie-service';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
  import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class AdminComponent implements OnInit {

  mobileQuery: MediaQueryList;
  public config: PerfectScrollbarConfigInterface = {};
  userRole:String = '';
  menuList :any = [];
  constructor(public menuItems: MenuItems, public router: Router, private cookieService: CookieService,) {
    this.userRole =  this.cookieService.get('role');
    this.userRole = this.userRole.toLocaleLowerCase();

    this.menuList = this.menuItems.getMenusAgainstUserRol(this.userRole)
   }

  ngOnInit(): void {
    
  }

  toggleSubMenu(_obj)
  {
    this.menuList[0].main.map((value)=>{
      if (value.state != _obj.state && value.children && value.children.length)
        value.expanded = false;
    });

    if (_obj.children && _obj.children.length) {
      if(_obj.expanded != true)
      _obj.expanded = true;
      else
      _obj.expanded = false;
    } 
  }

}
