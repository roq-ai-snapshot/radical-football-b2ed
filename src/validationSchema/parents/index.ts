import * as yup from 'yup';
import { playerParentValidationSchema } from 'validationSchema/player-parents';

export const parentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  player_parent: yup.array().of(playerParentValidationSchema),
});
