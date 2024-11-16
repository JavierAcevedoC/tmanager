import { MatTableDataSource } from "@angular/material/table";

export class ElementDataSource<T> extends MatTableDataSource<T>{

  propertiesNames: Array<string> = [];

  constructor(initialData: T[]) {
    super();
    this.setData(initialData);
    this.propertiesNames = this.getPropertiesName().map(n => n.toString());
  }

  private getPropertiesName(): Array<keyof T> {
    let item = new Object(this.data.at(0));
    return Object.keys(item) as Array<keyof T>;
  }

  setData(data: Array<T>) {
    this.data = data;
  }
}
