import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_EGvjyyHZy",
    ClientId: "7ttja2lo5vednd9im5mittppc2",
  };

  export default new CognitoUserPool(poolData);