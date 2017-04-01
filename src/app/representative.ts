import { Address } from './address';

export class Representative {
  constructor(
    public name: string,
    public title: string,
    public division: string,
    public party: string,
    public address: Address[],
    public phones: string[],
    public urls: string[],
    public photoUrl: string,
    public emails: string[]
  ) {  }
}