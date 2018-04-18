declare module app {
  type Error = {
    message: string;
    status: number;
  }

  type UserModel = {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    profile?: string;
  };
}

declare module todo {
}
