import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Service } from '../modals/service.modal';

@Pipe({
  name: 'filterService'
})
export class FilterServicePipe implements PipeTransform {

  transform(services: Service[], search: string) {
    if (!isNullOrUndefined(services) && search.trim() !== "") {
      console.log(search);
      let filter_services = services.filter(
        service => service.name.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return  filter_services;
    }
    return services;
  }

}
