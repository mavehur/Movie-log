import { Component } from "@angular/core";
import { TitleStrategy } from "@angular/router";

@Component({
    selector: 'app-movies',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent {
    subTitle: string = 'MovieList';
    imgWidth: number = 55;
    imgMargin: number = 2;
    isImgDisplayed: boolean = false;
    filterText = "Finding Nemo";
    movies: any[] = [
        {
            "movieId": 0,
            "name": "Finding Nemo",
            "director": "Andrew Stanton",
            "releaseDate": "2003-May-30",
            "cast": "Nemo",
            "rating": 5,
            "imageUrl": "assets/images/FindingNemo.jpeg"
        }, 
        {
            "movieId": 1,
            "name": "Wallace and Gromit - A Grand Day Out",
            "director": "Nick Park",
            "releaseDate": "1989-May-18",
            "cast": ["Wallace", "Gromit"],
            "rating": 5,
            "imageUrl": "assets/images/WallaceandGromit.jpg"
        }
    ];
    public toggleImg(): void {
        this.isImgDisplayed = !this.isImgDisplayed;
    }

}
