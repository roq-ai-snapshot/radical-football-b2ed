import { PlayerNoteInterface } from 'interfaces/player-note';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  name: string;
  user_id: string;
  academy_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  player_note?: PlayerNoteInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    player_note?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  academy_id?: string;
}
