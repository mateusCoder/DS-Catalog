import React from 'react'
import { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ButtonIcon from 'core/components/ButtonIcon'
import AuthCard from '../Card'
import './styles.scss'
import { makeLogin } from 'core/utils/request'
import { saveSessionData } from 'core/utils/auth'

type FormData = {
    username: string,
    password: string
}

type LocationState = {
    from: string
}

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormData>();
    const [hasError, setHasError] = useState(false)
    const history = useHistory()
    let location = useLocation<LocationState>()

    const { from } = location.state || { from: {pathname: "/admin"}}

    const onSubmit = (data: FormData) => {
        makeLogin(data)
            .then(response => {
                setHasError(false)
                saveSessionData(response.data)
                history.replace(from)
            })
            .catch(() => {
                setHasError(true)
            })
    }

    return (
        <AuthCard title="Login">
            {hasError &&
                (<div className="alert alert-danger mt-5">
                    Usuário ou senha inválidos!
                </div>)
            }
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className='margin-bottom-30'>
                    <input
                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''}`}
                        type="email"
                        placeholder="Email"
                        {...register('username')}
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            Email inválido
                        </div>
                    )}
                </div>
                <div className='margin-bottom-30'>
                    <input
                        className={`form-control input-base ${errors.password ? 'is-invalid' : ''}`}
                        type="password"
                        placeholder="Senha"
                        {...register('password', { required: true })}
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            Senha inválida
                        </div>
                    )}
                </div>
                <Link to="/auth/recover" className="login-link-recover">
                    Esqueci a senha ?
                </Link>
                <div className="login-submit">
                    <ButtonIcon text='Logar' />
                </div>
                <div className="text-center">
                    <span className="not-registered">
                        Não tem Cadastro?
                    </span>
                    <Link to="/auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>
                </div>
            </form>
        </AuthCard>
    )
}

export default Login