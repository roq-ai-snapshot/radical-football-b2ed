import { PlayerParentInterface } from 'interfaces/player-parent';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ParentInterface {
  id?: string;
  name: string;
  user_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  player_parent?: PlayerParentInterface[];
  user?: UserInterface;
  _count?: {
    player_parent?: number;
  };
}

export interface ParentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
}
