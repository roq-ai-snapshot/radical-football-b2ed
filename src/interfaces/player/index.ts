import { PlayerNoteInterface } from 'interfaces/player-note';
import { PlayerParentInterface } from 'interfaces/player-parent';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  user_id: string;
  academy_id: string;
  status: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  player_note?: PlayerNoteInterface[];
  player_parent?: PlayerParentInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    player_note?: number;
    player_parent?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  academy_id?: string;
  status?: string;
}
