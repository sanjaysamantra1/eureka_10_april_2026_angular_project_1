import { FormDemo1 } from './../form-demo1/form-demo1';
import { SignalDemo1 } from './../signal-demo1/signal-demo1';
import { PipesDemo } from './../pipes-demo/pipes-demo';
import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { DirectiveAssignment } from '../directive-assignment/directive-assignment';
import { Products } from '../products/products';
import { MyModal } from '../my-modal/my-modal';
import { Users } from '../users/users';
import { ProductList } from '../product-list/product-list';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { ProductListHttp } from '../product-list-http/product-list-http';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { TodoAdd } from '../todo-add/todo-add';
import { TodoList } from '../todo-list/todo-list';
import { UserList } from '../user-list/user-list';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { TemplateFormDemo1 } from '../template-form-demo1/template-form-demo1';
import { ModelFormDemo1 } from '../model-form-demo1/model-form-demo1';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { SignalForm } from '../signal-form/signal-form';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives,
    // DirectiveAssignment
    // Products
    // MyModal
    // Users
    // ProductList
    // PipesDemo
    // ParentDemo
    // Demo1,
    // Demo2
    // HttpDemo1
    // ProductListHttp
    // CommentList
    // EmployeeList
    // ObservableDemo1
    // ObservableDemo2
    // ObservableDemo3
    // SubjectDemo1
    // TodoAdd,
    // TodoList
    // UserList
    // SignalDemo1
    // SignalDemo2
    // FormDemo1
    // TemplateFormDemo1
    // ModelFormDemo1
    // DynamicForm
    // SignalForm,
    RouterOutlet
],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
