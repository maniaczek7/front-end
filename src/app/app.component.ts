import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy,OnInit {
  title = 'rmichniewski.eu';
  description = '';

  mobileQuery: MediaQueryList;
  currentUser: string;
  signup: boolean;

  private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);

    }

    ngOnInit(): void {
      this.currentUser = localStorage.getItem('currentUser');
      console.log(this.currentUser);
      this.signup = false;
    }

    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async removeToken() {
      localStorage.removeItem('currentUser');
      await this.sleep(1000);
      window.location.pathname = 'ui/login';
    }

    setSignup(){
      if(this.signup == false){
        this.signup = true;
      } else {
        this.signup = false;
      }
    }
}
