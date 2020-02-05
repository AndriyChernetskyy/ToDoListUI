import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyPlan } from '../models/plan-list.model';
import { PlanListService } from '../services/plan-list.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
    selector: 'app-plan-list',
    templateUrl: './plan-list.component.html'
})
export class PlanListComponent implements OnInit {
    public plan$: Observable<DailyPlan[]>;
    public userForm: FormGroup;

    public isVisible = false;

    @ViewChild('save', {static: false}) editElement: ElementRef;

    constructor(private planService: PlanListService, private formBuilder: FormBuilder) {
        this.userForm = this.formBuilder.group({
            datePlannedFor: new FormControl({value: '', disabled: true}),
            id: new FormControl({value: '', disabled: true}),
            planDescription: new FormControl({value: '', disabled: true})
        });
    }


    ngOnInit() {
        this.plan$ = this.planService.getPlans();
    }

    delete() {
        this.planService.deletePlan(this.userForm.controls.id.value).subscribe(
            success => console.log('done'),
            error => console.log(error));
    }

    onSubmit() {
        let newPlan = new DailyPlan();
        newPlan.id = this.userForm.controls.id.value;
        newPlan.datePlannedFor = this.userForm.controls.datePlannedFor.value;
        newPlan.planDescription = this.userForm.controls.planDescription.value;

        this.planService.updatePlan(newPlan).subscribe(
            success => console.log('done'),
            error => console.log(error));

        this.disableControls();
    }

    edit() {
        this.enableControls();
    }

    enableControls() {
        this.userForm.controls.datePlannedFor.enable();
        this.userForm.controls.planDescription.enable();
        this.isVisible = true;
    }

    disableControls() {
        this.userForm.controls.datePlannedFor.disable();
        this.userForm.controls.planDescription.disable();
        this.isVisible = false;
    }
}
