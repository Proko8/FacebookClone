import React, { useEffect, useContext, useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js"
import { AccountContext } from "./Accounts";
import LoginSignUp from "./LoginPage/LoginSignup";


export default () => {
    const [firstName, setFirstName] = useState(LoginSignUp.firstName);
    const [lastName, setLastName] = useState(LoginSignUp.lastName);

      console.log(firstName)
    const { getSession } = useContext(AccountContext);


    useEffect(() => {

    }, []);

    const onSubmit = event => {
        event.preventDefault();
        getSession().then(({user}) => {
            const attributes = [
                new CognitoUserAttribute({Name:'custom:firstName', Value: firstName}),
                new CognitoUserAttribute({Name:'custom:lastName', Value: lastName})
            ]
            user.updateAttributes(attributes, (err, result) => {
                if(err)console.error(err);
                console.log(result)
            })
        })
    }

return (
    <div>
        <h1>names here</h1>
    </div>
)

}