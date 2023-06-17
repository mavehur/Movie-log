import { Component, OnInit } from "@angular/core";
import { TitleStrategy } from "@angular/router";
import { movie } from "./movie.model";


@Component({
    selector: 'app-movies',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
    subTitle: string = 'MovieList';
    imgWidth: number = 55;
    imgMargin: number = 2;
    isImgDisplayed: boolean = false;

    // filterText = "Finding Nemo";
    private _filterText = "";
    get filterText(): string {
        return this._filterText;
    }
    public set filterText(v: string) {
        this._filterText = v;
        this.filteredMovies = this.performFilter(v);
        // console.log("setter: ", v);
    }
    filteredMovies: movie[] = [];
    movies: movie[] = [
        {
            movieId: 0,
            name: "Finding Nemo",
            director: "Andrew Stanton",
            releaseDate: "2003-May-30",
            cast: "Nemo",
            rating: 5,
            imageUrl: "assets/images/FindingNemo.jpeg",
            price: 0
        }, 
        {
            movieId: 1,
            name: "Wallace and Gromit - A Grand Day Out",
            director: "Nick Park",
            releaseDate: "1989-May-18",
            cast: "Wallace, Gromit",
            rating: 3,
            imageUrl: "assets/images/WallaceandGromit.jpg",
            price: 1
        }
    ];
    public toggleImg(): void {
        this.isImgDisplayed = !this.isImgDisplayed;
    }
    public ngOnInit(): void {
        console.log("Angular Life Cycle: ngOnInit()");
    }
    public performFilter(filterBy: string): movie[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter((movie: movie)=>{
            return movie.name.toLocaleLowerCase().includes(filterBy);
        });
    }
    public callFromStar(rating: number) {
        console.log("from star:", rating)
    }

}
// export class MovieListComponent {
//     subTitle: string = 'MovieList';
//     imgWidth: number = 55;
//     imgMargin: number = 2;
//     isImgDisplayed: boolean = false;
//     filterText = "Finding Nemo";
//     movies: movie[] = [
//         {
//             movieId: 0,
//             name: "Finding Nemo",
//             director: "Andrew Stanton",
//             releaseDate: "2003-May-30",
//             cast: "Nemo",
//             rating: 5,
//             imageUrl: "assets/images/FindingNemo.jpeg",
//             price: 0
//         }, 
//         {
//             movieId: 1,
//             name: "Wallace and Gromit - A Grand Day Out",
//             director: "Nick Park",
//             releaseDate: "1989-May-18",
//             cast: "Wallace, Gromit",
//             rating: 5,
//             imageUrl: "assets/images/WallaceandGromit.jpg",
//             price: 1
//         }
//     ];
//     public toggleImg(): void {
//         this.isImgDisplayed = !this.isImgDisplayed;
//     }

// }
