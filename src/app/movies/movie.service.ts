import { Injectable } from '@angular/core';
import { movie } from './movie.model'; 

@Injectable({
    providedIn: "root"
})
export class MovieService {
    getMovies(): movie[] {
        return [
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

        ]
    }
}