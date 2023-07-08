export class Recipe {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  constructor(
    _id: string,
    name: string,
    description: string,
    imagePath: string
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this._id = _id;
  }
}
