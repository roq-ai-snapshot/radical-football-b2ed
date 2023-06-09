import * as yup from 'yup';

export const playerParentValidationSchema = yup.object().shape({
  player_id: yup.string().nullable().required(),
  parent_id: yup.string().nullable().required(),
});
