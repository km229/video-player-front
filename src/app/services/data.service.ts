export class DataService {

    urlVideo: String;

    bookmark: String[];
    countBookmark: number;
    history: String[];
    countHistory: number;

    constructor(){
        this.getLocalStorage();
    }

    writeBookmark(url: String): void {
        this.bookmark.push(url);
        window.localStorage.setItem("bookmark", JSON.stringify(this.bookmark));
        this.countBookmark++;
    }

    writeHistory(url: String): void {
        this.history.push(url);
        window.localStorage.setItem("history", JSON.stringify(this.history));
        this.countHistory++;
    }

    getLocalStorage(): void {
        this.bookmark = JSON.parse(window.localStorage.getItem("bookmark"));
        if(this.bookmark === null){ 
            this.bookmark=[];
            this.countBookmark=0;
        } else {
            this.countBookmark = this.bookmark.length;
        }
        this.history = JSON.parse(window.localStorage.getItem("history"));
        if(this.history === null){ 
            this.history=[];
            this.countHistory=0;
        } else {
            this.countHistory = this.history.length;
        }
    }

}