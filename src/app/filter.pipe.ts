import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {
  transform(alldata, searchterm): unknown {
    if(!alldata || !searchterm){
      console.log(alldata, searchterm)
      return alldata
    }
    return alldata.filter(data => data.title.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)
  }

}
