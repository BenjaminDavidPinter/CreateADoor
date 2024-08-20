export class Door {
  constructor(
    public id: number,
    public imgSrc: string,
    public tags: string[],
    public cost: number,
    public material: string,
    public color: string,
    public price: number,
    public style: string,
    public name: string
  ) {}
}
