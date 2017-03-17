import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {XPCONFIG, ConfigUser} from './app.config';

@Injectable()
export class AuthService {

    private user: ConfigUser;

    constructor(private activatedRoute: ActivatedRoute) {
        this.user = XPCONFIG.user;
    }

    public login() {
        this.navigateToUrl(XPCONFIG.loginUrl);
        return false;
    }

    public isAuthenticated() {
        return !!this.user;
    }

    public isPlayer() {
        return !!this.user && !!this.user.playerId;
    }

    public getUser(): ConfigUser {
        return this.user;
    }

    public logout() {
        this.navigateToUrl(XPCONFIG.logoutUrl);
        return false;
    }

    private navigateToUrl(url: string) {
        window.location.href = url;
    }

    private getCurrentUrl(): string {
        return XPCONFIG.baseHref + '/' + this.activatedRoute.snapshot.url.join('/');
    }

}
