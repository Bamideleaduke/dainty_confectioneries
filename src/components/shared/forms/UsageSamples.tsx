import { Box, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import FormContainer from '../layouts/FormContainer';
import { Button } from '../buttons/Buttons';
import { FormControlBase } from './FormControl';
import FormControlWrapper from './FormControlWrapper';
import { Colors } from '../../../constants/colors';

const UsageSample: React.FC = () => {
  const onSubmit = (values: any) => {
    return values;
  };

  return (
    <FormContainer>
      <Formik
        enableReinitialize={true}
        initialValues={{ name: '', switch: false }}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <Box>
                <FormControlWrapper
                  name="name"
                  layout="horizontal"
                  label="Name"
                  required
                  layoutFlexGrid={[2, 10]}
                >
                  <FormControlBase
                    control="input"
                    name="name"
                    placeholder="Enter your name"
                  />
                </FormControlWrapper>

                
                <FormControlWrapper name="name" label="Checkboxes">
                  <FormControlBase
                    control="checkboxGroup"
                    name="name"
                    placeholder="Enter your name"
                    options={['Email', 'Account', 'Password']}
                  />
                </FormControlWrapper>
                <FormControlWrapper name="name" label="Select">
                  <FormControlBase
                    control="select"
                    name="name"
                    placeholder="Enter your name"
                    options={['Email', 'Account', 'Password']}
                  />
                </FormControlWrapper>
                <FormControlWrapper name="name" label="Radio">
                  <FormControlBase
                    control="radio"
                    name="name"
                    placeholder="Enter your name"
                    options={[
                      { label: 'Fixed', value: 'fixed' },
                      { label: 'Range', value: 'range' },
                    ]}
                  />
                </FormControlWrapper>
                <FormControlWrapper name="switch" label="Switch">
                  <FormControlBase control="switch" name="switch" />
                </FormControlWrapper>

                <Box display="flex" gap={3}>
                  {['draft', 'next'].map((type) => {
                    const isNext = type === 'next';
                    return (
                      <Button
                        key={type}
                        color={'primary'}
                        onClick={() => {
                          // TODO: handle onClick
                        }}
                        disabled={!formik.isValid}
                        type="submit"
                        variant={isNext ? 'contained' : 'outlined'}
                      >
                        {isNext ? 'Next' : 'Save as draft'}
                      </Button>
                    );
                  })}
                </Box>
                <Button
                  fullWidth
                  LinkComponent={'a'}
                  href="#"
                  sx={{ my: 3 }}
                  onClick={() => {
                    // TODO: handle onClick
                  }}
                  disabled={!formik.isValid}
                  type="submit"
                >
                  Test
                </Button>

                <Typography>
                  You dont have an account?
                  <Button
                    variant="text"
                    sx={{ color: Colors.Grundge }}
                    onClick={() => {
                      // TODO: handle onClick
                    }}
                  >
                    Sign up
                  </Button>
                </Typography>

                <Button
                  fullWidth
                  sx={{ my: 3 }}
                  onClick={() => {
                    // TODO: handle onClick
                  }}
                  disabled={true}
                >
                  Disabled
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};
export default UsageSample;
