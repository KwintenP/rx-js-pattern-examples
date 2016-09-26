import {City} from "./entities/city.entity";
import {Observable} from "rxjs/rx";
export class CityService {
    private cities: City[];

    public constructor() {
        this.cities = [
            new City("1", "Brussels"),
            new City("2", "Amsterdam"),
            new City("3", "Berlin"),
            new City("4", "Paris"),
            new City("5", "London"),
        ];
    }

    public getCities(): Observable<City[]> {
        return Observable.of(this.cities);
    };
}
