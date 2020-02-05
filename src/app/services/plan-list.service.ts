import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DailyPlan } from '../models/plan-list.model';
import { BaseService } from './base-service';
import { map } from 'rxjs/operators';

@Injectable()
export class PlanListService {
    constructor(private http: Http, private baseService: BaseService) {

    }

    public getPlans(): Observable<DailyPlan[]> {
        const endpoint = 'planners/get-plans';
        return this.baseService.get(endpoint);
    }

    public updatePlan(model: DailyPlan) {
        console.log(model);
        const endpoint = 'planners/update-plan';
        return this.baseService.update(endpoint, model);
    }

    public deletePlan(id: any) : Observable<DailyPlan> {
        const enpoint = 'planners/delete-plan';
        return this.baseService.delete(enpoint, id);
    }
}
