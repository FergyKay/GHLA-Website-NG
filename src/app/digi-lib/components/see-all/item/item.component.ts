import { Component, OnInit, Input } from '@angular/core';
import { IsoLanguages } from 'src/app/helpers/iso-languages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;
  parsedBook;
  mediaType;
  color;

  isoLanguages = new IsoLanguages()

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    switch (this.extractAndDetermineMediaType()) {
      case "audiobook":
        let audibk = this.item;
        let coverUrl
        let playlist = []

        audibk.link.forEach(element => {
          switch (element._attributes.type) {
            case "image/jpeg":
            case "image/png":
              coverUrl = element._attributes.href;
              break;

            case "audio/mpeg":
            case "audio/mp3":
              playlist.push({url:element._attributes.href,title:element._attributes.title})
            }
        });
        let adbk = {
          title: audibk.title._text,
          id: audibk.id._text,
          author: this.getAuthor(audibk.author),
          language:  this.isoLanguages.getLanguageNameFromCode(audibk['dcterms:language']._text),
          summary: audibk.summary._text,
          cover: coverUrl,
          publisher:audibk['dcterms:publisher']._text,
          playlist: JSON.stringify(playlist)
        }

        this.parsedBook = adbk
        this.mediaType = "Audiobook"
        this.color = "red"

        break;


      case "video":
        var videobk = this.item;
        let videoCover
        let videoList = []

        videobk.link.forEach(element => {
          switch (element._attributes.type) {
            case "image/jpeg":
              case "image/png":

              videoCover = element._attributes.href;
              break;

            case "video/mp4":
              videoList.push({url:element._attributes.href,title:element._attributes.title})
            }
        });
        let vdbk = {
          title: videobk.title._text,
          id: videobk.id._text,
          author: this.getAuthor(videobk.author),
          language:  this.isoLanguages.getLanguageNameFromCode(videobk['dcterms:language']._text),
          summary: videobk.summary._text,
          cover: videoCover,
          publisher:videobk['dcterms:publisher']._text,
          playlist: JSON.stringify(videoList)
        }

        this.parsedBook = vdbk
        this.mediaType = "Video"
        this.color = "yellow"

        break;

      case "ebook":
        let ebook = this.item
        let bookCover, bookUrl

        ebook.link.forEach(element => {
          switch (element._attributes.type) {
            case "image/jpeg":
              case "image/png":

              bookCover = element._attributes.href;
              break;

            case "application/epub+zip":
            case "application/zip":
              bookUrl = element._attributes.href
          }
        })

        let book;

        try {
          book = {
            title: ebook.title._text,
            id: ebook.id._text,
            author: this.getAuthor(ebook.author),
            summary: ebook.summary._text,
            cover:   bookCover,
            resource: bookUrl,
            publisher:ebook['dcterms:publisher']._text,
            language:  this.isoLanguages.getLanguageNameFromCode(ebook['dcterms:language']._text),

            
  
          }
        } catch (error) {
          book = {
            title: ebook.title._text,
            id: ebook.id._text,
            author: this.getAuthor(ebook.author),
            summary: "No Description Available",
            cover:   bookCover,
            resource: bookUrl,
            publisher:ebook['dcterms:publisher']._text,
            language:  this.isoLanguages.getLanguageNameFromCode(ebook['dcterms:language']._text),

  
          }
        }
        

        this.parsedBook = book
        this.mediaType = "Ebook"
        this.color = "green"
    }

  }


  extractAndDetermineMediaType() {
    let type;
    this.item.link.forEach(element => {
      if (element._attributes.type === "audio/mpeg") {
        type = "audiobook"
      }

      if (element._attributes.type === "video/mp4") {
        type = "video"
      }

      if (element._attributes.type === "application/epub+zip" || element._attributes.type === "application/zip") {
        type = "ebook"
      }

    });

    return type;

  }


  getType() {
    console.log(this.extractAndDetermineMediaType())




  }

  viewDetails() {
    if (this.mediaType === "Ebook")
      this.router.navigate(['/home/ebook-details'], { queryParams: {ebook:JSON.stringify(this.parsedBook)}, relativeTo: this.activatedRoute })


    if (this.mediaType === "Audiobook")
      this.router.navigate(['/home/audiobook-details'], { queryParams: {audiobook:JSON.stringify(this.parsedBook)}, relativeTo: this.activatedRoute })

    if (this.mediaType === "Video")
      this.router.navigate(['/home/video-details'], { queryParams: {video:JSON.stringify(this.parsedBook)}, relativeTo: this.activatedRoute })




  }



  getAuthor(authoObj) {

    // console.log(authoObj)
    try {
      return (authoObj.name._text)
    } catch (error) {
      return (authoObj[0].name._text)
    }finally{
      // return "No Author Information"
    }
  }


}
