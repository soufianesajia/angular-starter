export class ElementList {
  id : number;
  level: string;
  name: string;
  constructor( id: number , level: string, name: string) {
    this.name = name;
    this.level = level;
    this.id = id;
  }
}
