import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  imageSrc!: any;
  myForm!: FormGroup;
  Product: any = [];
  imageUrl: string | null = null;
  currentMaxId: number = 0;
  itemId: any;
  editedObject: any;


  editForm!: FormGroup;
  editedItemIndex!: number;
  items: any[] = [];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    console.log('get id', this.itemId);

    // this.editedObject = this.getObjectById(this.itemId);
    // console.log('this.editedObject ',this.editedObject);


    this.currentMaxId = this.getMaxIdFromDataSource();
    this.myForm = this.fb.group({
      id: [this.currentMaxId+1],
      image: ['', [Validators.required]],
      name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imgBase: ''
    });


    // //Edit form
    // this.editForm = this.fb.group({
    //   id:[this.itemId],
    //   name: ['', Validators.required],
    //   description: ['']
    //   // Add more form controls as needed
    // });
  }

  // getObjectById(id: number): any {
  //   const data = JSON.parse(localStorage.getItem('List') || '[]');
  //   return data.find((item: any) => item.id === id);
  // }
  getMaxIdFromDataSource(): number {
    return 0;
  }
  onSubmit() {
    if (this.myForm.valid) {
      alert('Product Saved Successfully..!');

      this.myForm.patchValue({ imgBase: this.imageBase64 })
      this.Product.push(this.myForm.value);
      console.log('this.Product ',this.Product);

      let data: any[] = JSON.parse(localStorage.getItem('List') || '[]');
      let currentMaxId = data.length > 0 ? Math.max(...data.map(item => item.id)) : 0;
      let newItem = {
        id: currentMaxId + 1,
        // Other properties...
      };
      //  this.currentMaxId++;
      this.myForm.patchValue({ id: newItem});
      localStorage.setItem('List', JSON.stringify(this.Product))
      this.myForm.reset();
    } else {
      console.error('Form is invalid.');
    }
  }
  imageBase64: any
  upload(event: any) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: { target: any; }) {
    let reader = e.target;
    var base64result = reader.result;
    this.imageBase64 = base64result;
  }


  goBack() {
    this.router.navigate(['list']);
  }
  gotoList() {
    this.router.navigate(['list']);
  }
  // editItem(index: number) {
  //   this.editedItemIndex = index;
  //   console.log(this.editedItemIndex);

  //   const editedItem = this.items[index];
  //   this.editForm.patchValue({
  //     name: editedItem.name,
  //     description: editedItem.description
  //     // Patch more form controls as needed
  //   });
  // }
}
