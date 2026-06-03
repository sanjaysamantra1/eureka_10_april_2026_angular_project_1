import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-assignment',
  imports: [FormsModule],
  templateUrl: './directive-assignment.html',
  styleUrl: './directive-assignment.css',
})
export class DirectiveAssignment {
  tasks = [
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ];
  filteredTasks = [...this.tasks];
  
  completedTasksCount(){
    return this.tasks.filter((task) => task.completed == true).length;
  }

  filterTasks(event: any) {
    const selectedOption = event.target.value;
    if (selectedOption == 'Completed') {
      this.filteredTasks = this.tasks.filter((task) => task.completed == true);
    } else if (selectedOption == 'Pending') {
      this.filteredTasks = this.tasks.filter((task) => task.completed == false);
    } else {
      this.filteredTasks = [...this.tasks];
    }
  }
}
