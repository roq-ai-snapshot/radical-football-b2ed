import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
import { createPlayerParent } from 'apiSdk/player-parents';
import { Error } from 'components/error';
import { playerParentValidationSchema } from 'validationSchema/player-parents';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, withAuthorization } from '@roq/nextjs';
import { PlayerInterface } from 'interfaces/player';
import { ParentInterface } from 'interfaces/parent';
import { getPlayers } from 'apiSdk/players';
import { getParents } from 'apiSdk/parents';
import { PlayerParentInterface } from 'interfaces/player-parent';

function PlayerParentCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: PlayerParentInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createPlayerParent(values);
      resetForm();
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<PlayerParentInterface>({
    initialValues: {
      player_id: (router.query.player_id as string) ?? null,
      parent_id: (router.query.parent_id as string) ?? null,
    },
    validationSchema: playerParentValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Create Player Parent
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <form onSubmit={formik.handleSubmit}>
          <AsyncSelect<PlayerInterface>
            formik={formik}
            name={'player_id'}
            label={'Select Player'}
            placeholder={'Select Player'}
            fetcher={getPlayers}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name as string}
              </option>
            )}
          />
          <AsyncSelect<ParentInterface>
            formik={formik}
            name={'parent_id'}
            label={'Select Parent'}
            placeholder={'Select Parent'}
            fetcher={getParents}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name as string}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default withAuthorization({
  service: AccessServiceEnum.PROJECT,
  entity: 'player_parent',
  operation: AccessOperationEnum.CREATE,
})(PlayerParentCreatePage);
