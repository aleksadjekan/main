export type User = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  username: string;
  password: string;
  userType: UserType;
};
export type Animal = {
  id: string;
  url: string;
  title: string;
  description: string;
};
export type Komenatar = {
  animal_id: string;
  username: string;
  description: string;
};

export enum UserType {
  Visitor,
  Employee,
}
export type Notification = {
  description: string;
  username: string;
  read: boolean;
  id: number;
};

export enum NotificationMessage {
  Nothing = "",
  Accept = "Your card is accepted",
  Decline = "Your card is not accepted, sorry",
  Welcome = "Welcome to the platform",
}

export type Dogadjaji = {
  description: string;
  name: string;
  imageSrc: string;
  num_likes: number;
};

export type Paket = {
  name: string;
  description: string;
  price: number;
  imageSrc: string;
};

export type Ticket = {
  name: string;
  price: string;
  username: string;
  numberOfTicket: number;
};

export type Order = {
  description: string;
  price: string;
  username: string;
  orderStatus: OrderStatus;
};
export enum OrderStatus {
  NOT_ANSWERED,
  CONFIRMED,
  DECLINED,
}
