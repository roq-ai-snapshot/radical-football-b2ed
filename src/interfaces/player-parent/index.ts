import { PlayerInterface } from 'interfaces/player';
import { ParentInterface } from 'interfaces/parent';
import { GetQueryInterface } from 'interfaces';

export interface PlayerParentInterface {
  player_id: string;
  parent_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  player?: PlayerInterface;
  parent?: ParentInterface;
  _count?: {};
}

export interface PlayerParentGetQueryInterface extends GetQueryInterface {
  player_id?: string;
  parent_id?: string;
}
