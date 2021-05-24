import { Friends } from './friends.model';

export class Card{
  constructor(
    public location: string,
    public date: string,
    public req: Array<string>,
    public records: Friends[]
  ) { }
}
