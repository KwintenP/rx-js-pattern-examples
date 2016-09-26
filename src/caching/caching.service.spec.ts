import {CachingService} from "./caching.service";
import {CityService} from "./city.service";
import {City} from "./entities/city.entity";
describe("service: CachingService", () => {
    let cachingService: CachingService;

    beforeEach(() => {
        // In a normal situation, you would mock the city service
        cachingService = new CachingService(new CityService());
    });

    describe("on getCachedCities", () => {
        it("should return an observable with an array of cities", () => {
            let citiesObs$ = cachingService.getCachedCities();

            citiesObs$.take(1).subscribe(
                (cities: City[]) => {
                    expect(cities.length).toBe(3);
                }
            )
        });
    });
});