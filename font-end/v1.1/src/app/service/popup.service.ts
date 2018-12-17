import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class PopupService {
    private toastParams;
    private loadingParams;

    constructor(
        private router: Router
    ) { }

    toast(_params) {
        this.toastParams = _params;
        let _duration;
        if (_params.duration) {
            _duration = _params.duration;
        } else {
            _duration = 500;
        }
        const _outlets = { 'popup': 'toast' };
        this.router.navigate([{ outlets: _outlets }]);
        setTimeout(() => {
            const _outlets2 = { 'popup': null };
            this.router.navigate([{ outlets: _outlets2 }]);
        }, _duration);
    }
    getToastParams() {
        return this.toastParams;
    }
}