import * as yup from 'yup';
import { playerNoteValidationSchema } from 'validationSchema/player-notes';
import { playerParentValidationSchema } from 'validationSchema/player-parents';

export const playerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  player_note: yup.array().of(playerNoteValidationSchema),
  player_parent: yup.array().of(playerParentValidationSchema),
});
