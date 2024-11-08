export interface IMessage {
  id: number;
  content: string;
  userId: string;
  user: {
    profile: {
      fullname: string;
      profilePhoto: true;
    };
  };
}
