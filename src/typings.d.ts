declare module app {
  type Error = {
    message: string;
    status: number;
  }
  namespace model {
    type User = {
      uid: string;
      email: string;
      displayName?: string;
      photoURL?: string;
      profile?: string;
    };
  }
}

declare module todo {
}
