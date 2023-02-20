
export class Client {
  get cadastro(): number {
    return this._cadastro;
  }
  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  private readonly _id:number
  private readonly _name:string
  private readonly _cadastro:number;
  constructor(id:number,cadastro:number,nome:string) {
    this._id=id
    this._name=nome
    this._cadastro=cadastro
  }
}
