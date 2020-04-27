import { Component } from '@angular/core'
import { templateJitUrl } from '@angular/compiler';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses' ,
    templateUrl: './courses.component.html',
    styleUrls:['./courses.component.css']
})
export class CoursesComponent{
    title="Products";
    courses:any;
    courses1:any;
    _courseService:CoursesService;
    imageurl="https://i.stack.imgur.com/MVhla.jpg"
    viewMode:string="map"
    canSave:boolean=true;
    mylist={
        name: 'sk',
        assignee:{
            name:'kidambi - safe travesal operator'
        }
    }
    getTitile(){
        return this.title;
    }

    constructor(service:CoursesService){
        this.courses = service.getCourses();
    }

    getProducts(){
        return this.courses;
    }

    douhavecourses(){
        if(this.courses.length>0)
        return true;
        else
        return false;
    }
    loadCourses(){
        // return this.courses;
        this.courses1=['sk','is','awesome']
    }
    trackCourse(index,course){
       return course? course: undefined;
    }
    ngstyleToggle(){
        this.canSave=!this.canSave;
    }

}
