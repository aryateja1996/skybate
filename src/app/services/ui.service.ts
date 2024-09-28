import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

interface UIState {
    sideMenu: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class UIService {

    _uiState: UIState = {
        sideMenu: false
    }
    uiState$ = new BehaviorSubject<UIState>(this._uiState);

    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if(event instanceof NavigationStart) {
                this.setState({sideMenu: false});
            }
        });
    }

    setState(state: Partial<UIState>) {
        this._uiState = {...this._uiState, ...state};
        this.uiState$.next(this._uiState);
    }
}