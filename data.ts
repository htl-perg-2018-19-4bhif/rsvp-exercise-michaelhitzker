import * as loki from 'lokijs';

export interface IParty {
  id: number;
  title: string;
  location: string;
  date: string;
}

export interface IGuest{
  id: number;
  firstname: string;
  lastname: string;
  email?: string;
}

export const party: IParty = {id: 1, title:"Xmas Party", location:"Empire State Building", date:"2018-12-23"};
