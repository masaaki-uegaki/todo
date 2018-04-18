import { Moment } from 'moment';

declare global {
  namespace app {
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

  namespace todo {
    namespace model {
      type Task = {
        id: string;
        name: string;
        desc?: string;
        priority?: string;
        startAt?: string | Moment;
        dueAt?: string | Moment;
        expectedManHour?: number;
        actualManHour?: number;
        expectedCost?: number;
        actualCost?: number;
        progress?: number;
        createdAt: string | Moment;
        createdUid: string;
        modifiedAt?: string | Moment;
        modifiedUid?: string;
      }
    }
  }
}
