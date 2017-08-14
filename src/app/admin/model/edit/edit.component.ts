import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Service } from '../service/service';
import { Model } from '../service/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _service: Service
  ) { }

  ngOnInit() {
      this.getSingleModel();

  }

  //model:any={};
  model = new Model();
  id = this.route.snapshot.params['id'];
  getSingleModel(){
    
    this._service
      .show(this.id)
      .subscribe(model =>{
          this.model = model[0];
          })
  };
  
  edit(){
      this._service
        .edit(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/admin/model/index']);
  }

}
