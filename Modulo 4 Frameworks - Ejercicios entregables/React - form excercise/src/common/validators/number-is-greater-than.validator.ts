import { FieldValidationResult } from "lc-form-validation";

interface CustomParams {
  maxValue: number;
}

export const numberValueIsGreaterThan = (
  value: any,
  vm: any,
  customParams: CustomParams
) => {
  const paramsOk = paramsInformed(customParams);
  const isValid = paramsOk && value > customParams.maxValue;
  const validationResult = new FieldValidationResult();

  validationResult.succeeded = isValid;
  validationResult.type = "NUMBER_VALUE_GREATER_THAN";
  validationResult.errorMessage = isValid
    ? ""
    : `Number must be greater than ${customParams.maxValue}`;
  return validationResult;
};

const paramsInformed = customParams => {
  let paramsInformed = customParams && customParams.maxValue;

  if (!paramsInformed) {
    console.error(`You are using custom validator numberValueIsGreaterThan, but you forgot to 
    inform customParams.maxValue entry`);
  }

  return paramsInformed;
};