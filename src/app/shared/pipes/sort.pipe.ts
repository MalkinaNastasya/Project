import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Record } from '../modals/record.modal';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(record: Record[], search: string) {
    if(!isNullOrUndefined(record) && (search || '').trim() !== "") {
        if (search == "1") {
            let search_record = record.filter(
              record => record.status === 'Запись создана'
            );
            return search_record;
        } else if (search == "2") {
            let search_record = record.filter(
                request => request.status === 'Запись выполнена'
            );
            return search_record;
        } else if (search == "3") {
            let search_record = record.filter(
              record => record.status === 'Запись оплачена'
            );
            return search_record;
        } else {
            return record;
        }
    }
    return record;
}
}