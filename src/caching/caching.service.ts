import {CityService} from "./city.service";
export class CachingService {

    public constructor(private cityService: CityService) {

    }

    public getCachedCities() {
        return this.cityService.getCities()
            .publishReplay(1)
            .refCount();
    }
}

