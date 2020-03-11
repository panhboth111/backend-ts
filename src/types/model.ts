export interface IUser {
  email: string;
  name: string;
  role: string;
  isStreaming?: boolean;
}
export interface ICover {
  pic: string;
  email: string;
}
export interface IProfile {
  pic: string;
  email: string;
}
export interface ICredentials {
  email: string;
  pwd: string;
  date?: string;
}
export interface IHistory {
  action: string;
  streamCode: string;
  streamTitle: string;
  email: string;
}
export interface IStream {
  streamCode: string;
  streamTitle: string;
  description: string;
  isPrivate: boolean;
  password: string;
  owner: string;
  ownerName: string;
  date: Date;
  isActive: boolean;
  streamFrom: string;
}
