import { Box } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import InputControl from "../shared/forms/controls/InputControl";
import * as FormMeta from "../../utils/validators/Customization";
import SelectControl from "../shared/forms/controls/SelectControl";
import CheckboxControl from "../shared/forms/controls/CheckboxControl";
import { InchSelection } from "../InchSelection";
import FormControlWrapper from "../shared/forms/FormControlWrapper";
import { Button } from "../shared/buttons/Buttons";
import { RouteList } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { CakeProps, DataProps } from "../../utils/types/ProductDescriptionTypes";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux-hook";
import { CakeItem, addToOrder } from "../../utils/redux/features/cakeSlice";

const CustomizationForm: React.FC<DataProps> = ({ data, id }) => {

  const { InputFieldNames } = FormMeta;
  const navigate = useNavigate();
const dispatch = useAppDispatch()
  const order = useAppSelector((state) => state.cakeData?.order);

  const addCakeToCart = data
  .map((item) => Object.values(item.items))
  .flat()
  .find((cake: any) => cake.id === id);
  
  console.log("id", id)
  console.log("order", order)
  console.log("addCakeToCart", addCakeToCart)
  

  const icingOption = [
    { key: "--Please select--", value: "--Please select--" },
    { key: "Hair care", value: "Hair care" },
    { key: "Skin care", value: "Skin care" },
    { key: "Manicure", value: "Manicure" },
  ];
  const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    // resetForm();
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={FormMeta.customizationInitialValue}
      validationSchema={FormMeta.customizationValidationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log(formik.values);
        return (
          <Form>
            <Box>
              <SelectControl
                name={InputFieldNames.CAKE_FILING}
                label={"Cake filling:"}
                options={icingOption}
              />
              <SelectControl
                name={InputFieldNames.SHAPE}
                label={"Shapes:"}
                options={icingOption}
              />
              <SelectControl
                name={InputFieldNames.ICING_TYPE}
                label={"Icing type:"}
                options={icingOption}
              />

              <CheckboxControl
                label="Flavours (maximum of two):"
                name={InputFieldNames.FLAVOUR}
                options={[
                  "Vanilla",
                  "Chocolate",
                  "Red velvet",
                  "Carrot",
                  "Cream n cookies",
                  "Strawberry",
                  "Coconut",
                ]}
                maxLength={2}
              />
              <FormControlWrapper
                name={InputFieldNames.CAKE_SIZE}
                label="Cake Sizes (inches):"
              >
                <InchSelection
                  name={InputFieldNames.CAKE_SIZE}
                  inches={[9, 6, 10, 14, 16]}
                />
              </FormControlWrapper>

              <InputControl
                name={InputFieldNames.COLOUR}
                label={"Colours"}
                placeholder="Colours"
              />
              <InputControl
                name={InputFieldNames.PERSONALIZED_MESSAGE}
                label={"Personalized message on cake:"}
                placeholder="Personalized message on cake"
              />

              <Box
                sx={{
                  display: { sm: "flex" },
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "center" },
                  marginTop: { xs: "1rem", sm: "2rem" },
                }}
              >
                <Button
                  type="submit"
                  onClick={() => {
                    navigate(`${RouteList.CART}`);
                    if (addCakeToCart) {
                      // order.push(addCakeToCart);
                      // order = [...order, addCakeToCart];
                      dispatch(addToOrder(addCakeToCart));
                    }
                    // order.push(...(data as CakeProps[]).flatMap(item => Object.values(item.items)));
                console.log("pushed",order)
                  }}
                >
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CustomizationForm;
// function useAppSelector(arg0: (state: any) => any) {
//   throw new Error("Function not implemented.");
// }

