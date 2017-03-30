import { Address } from './address';

export class Representative {
  constructor(
    public id: number,
    public name: string,
    public address: Address[],
    public party: string,
    public phones: string[],
    public urls: string[],
    public photoUrl: string,
    public emails: string[]
  ) {  }
}