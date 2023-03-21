
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../models/employee';
import { MatPaginator } from '@angular/material/paginator';

import { EmpFilter, filterOption } from '../models/empfilter';
import { MatSelectChange } from '@angular/material/select';
import { MatSort, Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
;

export interface Card {
    title: string;
    subtitle: string;
    text: string;
  }

  const DATA: Card[] = [
    {
      title: 'Shiba Inu 1',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Shiba Inu 2',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Shiba Inu 3',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Shiba Inu 4',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Shiba Inu 5',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Shiba Inu 6',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Shiba Inu 7',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Shiba Inu 8',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Shiba Inu 9',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
      title: 'Shiba Inu 10',
      subtitle: 'Dog Breed',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    }
  ];
@Component({
  selector: 'app-simple-mat-table',
  templateUrl: './simple-mat-table.component.html',
  styleUrls: ['./simple-mat-table.component.scss'],
})
export class SimpleMatTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'jobtitle',
    'department',
  ];

  items = [
    { id: 1, column1: 'Item 1', column2: 'Description 1', column3: 'Price 1', column4: 'Qty 1', isEditing: false },
    { id: 2, column1: 'Item 2', column2: 'Description 2', column3: 'Price 2', column4: 'Qty 2', isEditing: false },
    { id: 3, column1: 'Item 3', column2: 'Description 3', column3: 'Price 3', column4: 'Qty 3', isEditing: false },
  ];
 

  

  EmpData: Employee[] = [
    {
      id: 1,
      firstname: 'Mellie',
      lastname: 'Gabbott',
      email: 'mgabbott0@indiatimes.com',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project1', id: 1 },
    },
    {
      id: 2,
      firstname: 'Yehudi',
      lastname: 'Ainsby',
      email: 'yainsby1@w3.org',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project2', id: 2 },
    },
    {
      id: 3,
      firstname: 'Noellyn',
      lastname: 'Primett',
      email: 'nprimett2@ning.com',
      gender: 'Female',
      department: 'Human Resources',
      jobtitle: 'Project Manager',
      project: { name: 'project3', id: 3 },
    },
    {
      id: 4,
      firstname: 'Stefanie',
      lastname: 'Yurenin',
      email: 'syurenin3@boston.com',
      gender: 'Female',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project4', id: 4 },
    },
    {
      id: 5,
      firstname: 'Stormi',
      lastname: "O'Lunny",
      email: 'solunny4@patch.com',
      gender: 'Female',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project5', id: 5 },
    },
    {
      id: 6,
      firstname: 'Keelia',
      lastname: 'Giraudy',
      email: 'kgiraudy5@nba.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project6', id: 6 },
    },
    {
      id: 7,
      firstname: 'Ikey',
      lastname: 'Laight',
      email: 'ilaight6@wiley.com',
      gender: 'Male',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project7', id: 7 },
    },
    {
      id: 8,
      firstname: 'Adrianna',
      lastname: 'Ruddom',
      email: 'aruddom7@seattletimes.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project8', id: 8 },
    },
    {
      id: 9,
      firstname: 'Dionysus',
      lastname: 'McCory',
      email: 'dmccory8@ox.ac.uk',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project9', id: 9 },
    },
    {
      id: 10,
      firstname: 'Claybourne',
      lastname: 'Shellard',
      email: 'cshellard9@rediff.com',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project10', id: 10 },
    },
  ];

  //dataSource = new MatTableDataSource(this.EmpData);
  dataSourceWithPageSize = new MatTableDataSource(this.EmpData);
  @ViewChild(MatPaginator)
    paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
//   @ViewChild('paginator')
//     paginator!: MatPaginator;
   @ViewChild('paginatorPageSize')
     paginatorPageSize!: MatPaginator;

  pageSizes = [2, 4, 10];

  addRow() {
    let newItem = { id: 1, column1: '', column2: '', column3: '', column4: '', isEditing: false };
    this.items.push(newItem);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }
  editItem(item: any) {
    item.isEditing = true;
  }

  saveItem(item: any) {
    // implement save logic
    item.isEditing = false;
  }

  deleteItem(item: any) {
    // implement delete logic
  }

  cancelEdit(item: any) {
    item.isEditing = false;
  }
  

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }
}
