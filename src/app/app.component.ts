import { Component,HostListener } from '@angular/core';
import { MatDialog } from '@angular/material'
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dialogResult = "";
  windowHeight = window.screen.height;
  windowWidth = window.screen.width;
  currentPosition;
  navBgIsVisible: boolean = false;
  modalIsVisible: boolean = false;
  workButtonY;
  aboutButtonY;
  contactButtonY;
  navHomeIsActive: boolean = true;
  navWorkIsActive: boolean = false;
  navAboutIsActive: boolean = false;
  navContactIsActive: boolean = false;
  toggleModals: any = {};


  toggleModal(event, index) {
    console.log(event, index);
    if (!this.modalIsVisible) {
      this.modalIsVisible = true;
    } else {
      this.modalIsVisible = false;
    }

  }

  locateSecontions() {
    this.workButtonY = document.getElementById('work').offsetTop;
    this.aboutButtonY = document.getElementById('about').offsetTop;
    this.contactButtonY = document.getElementById('contact').offsetTop;
  }


  portfolioItems:Array<Object> = [
    {type: 'web', name: 'Illusion Sound', tags: 'Website Design, Wordpress Theme, html/css, php', thumb: '/assets/images/portfolios/web/illusion-sound-thumb.png', image: '/assets/images/portfolios/web/illusion-sound-large.png',  link: 'http://illusionsoundent.com', desc: 'With the evolution of the entertainment scene in Jamaica and the Caribbean, Illusion never failed at advancing with the globalized industry using its versatility and dynamic nature to entertain any genre patronage from fist pumping House and Pop to R&B, Hip Hop, skanking Reggae and the energized Dancehall. Illusion possesses the versatility to entertain any kind of crowd. With their hard-core juggling, distinctive remixes and even original jams, Illusion offers a diverse and entertaining musical appeal.'},

    {type: 'web', name: 'Hostshark', tags: 'Website Design, Wordpress Theme html/css, php', thumb: '/assets/images/portfolios/web/hostshark-thumb.png', image: '/assets/images/portfolios/web/hostshark-large.png', link:'', desc: 'HostShark.co was started in 2013 by a group of long time web hosting experts with over 8 years experience in the web hosting industry. We offer fast, reliable and affordable web hosting services. We are a small web hosting company, this enables us to keep a close relationship with each of our clients.'},

    {type: 'app', name: 'Snake', tags: 'Mobile Game Development/Design, Lua', thumb: '/assets/images/portfolios/app/snake-thumbnail.png', image: '/assets/images/portfolios/app/snake.png', link: 'https://play.google.com/store/apps/details?id=com.app5ive.games.snake', desc: 'A blast from the past, This is a colorful remake of the classic Snake game that became popular on the Nokia 3310.'},
    {type: 'app', name: 'Happy Fruits', tags: 'Mobile Game Development/Design, Lua', thumb: '/assets/images/portfolios/app/happyfruits-thumbnail.png', image: '/assets/images/portfolios/app/happyfruits.png',  link: 'https://play.google.com/store/apps/details?id=com.app5ive.games.happyfruits', desc: 'Compete with your friends to see who can catch the most fruits. Simply tap or drag anywhere on the screen to navigate the basket and catch fruits.'},
    {type: 'app', name: 'Light', tags: 'Mobile App Development/Design, Java', thumb: '/assets/images/portfolios/app/light-thumbnail.png', image: '/assets/images/portfolios/app/lightapp.png',  link: 'https://play.google.com/store/apps/details?id=com.app5ive.super_brightflashlight', desc: 'Light is a simple flashlight app that turns your phone into a flashlight. Very easy to use, no complications, and optimized for all android devices with camera flash.'},
    {type: 'app', name: 'Celsius & Fahrenheit Converter', tags: 'Mobile App Development/Design, Java', thumb: '/assets/images/portfolios/app/cf-thumbnail.png', image: '/assets/images/portfolios/app/cfapp.png',  link: 'https://play.google.com/store/apps/details?id=com.app5ive.degree', desc: 'Without buttons this app simplifies the conversion of celsius and fahrenheit, simply slide up or down and convert higher or lower temperatures.'},
    {type: 'app', name: '7 Minutes Workout Assistant', tags: 'Mobile App Development/Design, Java', thumb: '/assets/images/portfolios/app/7min-thumb.png', image: '/assets/images/portfolios/app/7min.png',  link: 'https://play.google.com/store/apps/details?id=com.app5ive.sevenminutesworkout', desc: '7 Minutes, a chair, and a wall is the only thing you need to get in shape again! This is one of the first apps I made.'},
    {type: 'app', name: 'Dot Bounce', tags: 'Mobile App Development/Design, Lua', thumb: '/assets/images/portfolios/app/bounce-thumb.png', image: '/assets/images/portfolios/app/bounce.png',  link: 'https://play.google.com/store/apps/details?id=com.app5ive.games.bounce', desc: 'A very simple yet challenging game made purely with coded shapes. Simply tap the screen to jump and avoid the red walls. This app was a personal challenge to build a game without using any image assets. '},

  ];

  constructor(public dialog: MatDialog) {
  // console.log(this.windowWidth, this.windowHeight);

  }
  openDialog(theData) {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      panelClass: 'my-full-screen-dialog',
      //width: '100%',
      data: theData
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }


  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    //console.log($event);
    this.locateSecontions();
    this.currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //console.log(this.currentPosition, this.aboutButtonY);

    if (this.currentPosition > 56 && !this.navBgIsVisible ) {
      //console.log('Above 56');
      this.navBgIsVisible = true;
    } else if (this.currentPosition < 56 && this.navBgIsVisible) {
      //console.log('under 56');
      this.navBgIsVisible = false;
    }

    if (this.workButtonY > this.currentPosition){
      //console.log('change work button');
      this.navHomeIsActive = true;
      this.navWorkIsActive = false;
      this.navAboutIsActive = false;
      this.navContactIsActive = false;
    }  if (this.workButtonY-106 <= this.currentPosition){
      this.navHomeIsActive = false;
      this.navWorkIsActive = true;
      this.navAboutIsActive = false;
      this.navContactIsActive = false;

    }  if (this.aboutButtonY-106 <= this.currentPosition){
      this.navHomeIsActive = false;
      this.navWorkIsActive = false;
      this.navAboutIsActive = true;
      this.navContactIsActive = false;
      //console.log("wowowow");
    }  if (this.contactButtonY-106 <= this.currentPosition){
      this.navHomeIsActive = false;
      this.navWorkIsActive = false;
      this.navAboutIsActive = false;
      this.navContactIsActive = true;
    }

  }
  // ngAfterViewInit() so it triggers after the page is loaded
  ngAfterViewInit(){

  }

}
