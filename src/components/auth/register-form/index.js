import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";
import UsersService from '../../../services/users';

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [navigateToLogin, setNavigateToLogin] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const user = await UsersService.register({name: name, email: email, password: password});
            setNavigateToLogin(true);
        } catch (error) {
            setError(true);
        }
    }

    if(navigateToLogin)
    return <Navigate replace to={{pathname: "/login"}}/>

    return (
        <Fragment>
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Name:</Label>
                            <Control>
                                <Input
                                    type="text"
                                    required
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input
                                    type="password"
                                    required
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <a className="button is-white has-text-custom-purple"
                                        onClick={ /*ou seja, se clicar no login, passamos esse método para true, cuja a função envia um Navigate para a página de login*/ e => setNavigateToLogin(true)}
                                        >Login or</a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Register</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        
                        { /*O que essa linha faz é basicamente verificar se ocorreu um erro, então se ocorrer um erro, a mensagem (Help será exibida)*/error && <Help color="danger">Email or Password invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default RegisterForm;