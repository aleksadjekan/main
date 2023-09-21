export type User = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  username: string;
  password: string;
  userType: UserType;
};

export enum UserType {
  Visitor,
  Employee,
}
export type Notification = {
  notificationType: NotificationMessage;
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
  image_src: string;
};
