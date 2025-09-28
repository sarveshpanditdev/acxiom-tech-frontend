import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../../model/user-model';

@Component({
  selector: 'app-home-layout',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.css'
})
export class HomeLayout {

  username: string = 'JohnDoe'; // from login
  user: UserModel = {
    name: '',
    mobile: '',
    address: '',
    skills: '',
    hobbies: '',
    photoUrl: '',
    photoName: ''
  };
  submittedUsers: UserModel[] = [];

  onSubmit() {
    if (!this.user.name || !this.user.mobile) {
      alert('Please fill required fields!');
      return;
    }
    this.submittedUsers.push({ ...this.user });
    // reset form
    this.user = { name: '', mobile: '', address: '', skills: '', hobbies: '', photoUrl: '', photoName: '' };
  }

  onPhotoUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.user.photoName = file.name;
      const reader = new FileReader();
      reader.onload = (e: any) => this.user.photoUrl = e.target.result;
      reader.readAsDataURL(file);
    }
  }

  logout() {
    // logic to logout
    alert('Logged out!');
  }

  // Optional: download CSV
  downloadCSV() {
    const headers = ['Name','Mobile','Address','Skills','Hobbies','Photo'];
    const rows = this.submittedUsers.map(u => [u.name,u.mobile,u.address,u.skills,u.hobbies,u.photoName]);
    let csvContent = "data:text/csv;charset=utf-8,"
      + headers.join(",") + "\n"
      + rows.map(r => r.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "user_details.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
