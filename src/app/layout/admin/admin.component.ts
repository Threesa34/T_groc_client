import { Component, OnInit, ChangeDetectorRef, OnDestroy, HostBinding } from '@angular/core';
import {Router} from '@angular/router';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { CookieService } from 'ngx-cookie-service';
import {  FormControl } from '@angular/forms';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MastersService } from '../../services/masters.service';
import Swal from 'sweetalert2';

export interface Section {
  name: string;
  updated: Date;
}

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
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';
  hideBtn:boolean;

  folders: Section[] = [
    {
      name: 'Mayur P. Mhatre have birthday today. Want to wish him?',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor(public menuItems: MenuItems, public router: Router, private cookieService: CookieService,public _MastersService: MastersService) {
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

  SignOut()
  {
    this._MastersService.SignOut().subscribe((res:any)=>{
      if(res)
      {
        var resAlert ={
          title: res.title,
          text: res.message,
          type: res.type,
        }
         Swal.fire(resAlert).then((result) => {
          this.router.navigate(['/']);
          }); 
      }
    });
  }


}
