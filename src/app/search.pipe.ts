import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(records: any[], searchText: string): any[] {
    if (!records) return [];
    if (!searchText || searchText == null) return records;
    return records.filter(response => {
      return (response.title.toLowerCase().includes(searchText.toLowerCase())||response.description.toLowerCase().includes(searchText.toLowerCase()));
    });
  }

}
