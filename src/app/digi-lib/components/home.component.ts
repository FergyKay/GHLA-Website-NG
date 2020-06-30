import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


declare var $;

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css', '../../digi-lib/components/digi-library-assets/css/style.css']
})
export class HomeComponent implements OnInit {


  superNavigationLevel = [] //Level 1 navigation
  subNavLinks = [] //Level 2 navigation
  subSubNavLinks = [] //Level 3 navigation

  subNavTarget = "" //Level 1 target
  subSubNavTarget = "" //Level 2 target

  isSuperNavClicked = false
  isSubNavClicked = false
  navigationLinks: unknown;
  ebooksUrl: any;
  audioboksUrl: any;
  videosUrl: any;



  constructor(private dataService: DataService,private router:Router) {

  }

  ngOnInit(): void {
    this.dataService.getInitialFeed().then(entries => {
      (entries as any).forEach(entry => {
        if (!(entry.title._text as String).includes("Tertiary")) {
          this.superNavigationLevel.push(entry)
        }
      });
    })
  }


  navClicked(level) {
    
    this.isSuperNavClicked = false
    this.subNavLinks = []

    this.dataService.getIsPenUlView(level.link._attributes.href).then(isPenUltimateField => {
      this.isSuperNavClicked = true
      if (!isPenUltimateField) {
        this.dataService.pullFromFeed(level.link._attributes.href).then(entries => {
          this.subNavLinks = entries as any
          this.subNavTarget = level.title._text
        })
      }
    })
  }

  subNavClicked(subLevel){
    this.isSubNavClicked = false
    this.subSubNavLinks = []

    this.dataService.getIsPenUlView(subLevel.link._attributes.href).then(isPenUltimateField => {
      this.isSubNavClicked = true
      if (!isPenUltimateField) {
        this.dataService.pullFromFeed(subLevel.link._attributes.href).then(entries => {
        
          this.subSubNavLinks = entries as any
          this.subSubNavTarget = subLevel.title._text
        })
      }else{
       this.routeToCoursesView(subLevel.link._attributes.href)
      }
    })
  }



//Assumption is that it will be a penultimate level as in the entries in this levels will lead straight to content
  subSubNavClicked(subSubLevel){
    this.routeToCoursesView(subSubLevel.link._attributes.href)
  }



  routeToCoursesView(link){
      this.router.navigate(["/home/Courseselection"],{queryParams:{url:encodeURI(link)}})
  }


  logout(){
    localStorage.clear()
    window.location.reload()
  }

  showContent(hrefToForms,targetName) {

    // let loader = new Loader();
    // loader.show()

    // setTimeout(()=>{
    //   loader.hide()
    // },10000);


    this.dataService.pullFromFeed(hrefToForms).then(entries => {

      this.dataService.getFeedNavLinks().then(links=>{
        this.navigationLinks = links
        // console.log(this.navigationLinks)
      

        this.ebooksUrl = entries[0].link._attributes.href;
        this.audioboksUrl = entries[1].link._attributes.href;
        this.videosUrl = entries[2].link._attributes.href;


        // console.log(this.ebooksUrl)

      


        this.router.navigate(['/home/content'], {
          queryParams: {
            initial:hrefToForms,
            title: targetName,
            ebooks: this.ebooksUrl,
            audiobooks: this.audioboksUrl,
            videos: this.videosUrl,
            navLinks:JSON.stringify(this.navigationLinks)
          }
        })

      })

    
    }).catch(err=>{
      // loader.hide()
    })

  }

}





