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

export const party: IParty= {id: 1, title:"New Year's Eve Party", location:"Secret", date:"2018-12-31"};
