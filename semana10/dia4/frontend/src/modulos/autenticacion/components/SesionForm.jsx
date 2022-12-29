import { useState } from 'react'
import { Link } from 'react-router-dom'



export const SesionForm = () => {

    const [credenciales, setCredenciales] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (event) => {
        setCredenciales({
            ...credenciales,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const onSubmitLogin = async (event) => {
        event.preventDefault()

    }

    return (
        <div className="uk-container">

            <div className="uk-width-1-3@m m-auto my-16">
                <div className="mb-4">
                    <h2 className="mb-0">Welcome <span className="uk-text-bold">back</span></h2>
                    <p className="my-0">Login to manage your account.</p>
                </div>
                <form onSubmit={onSubmitLogin}>

                    <div className="uk-form-group  mb-0">
                        <label className="uk-form-label"> Email</label>

                        <div className="uk-inline w-full">
                            <span className="uk-form-icon mb-4">
                                <i className="uil-envelope"></i>
                            </span>
                            <input className="uk-input" type="email" name="email" placeholder="name@example.com" onChange={handleInputChange} />
                        </div>

                    </div>

                    <div className="uk-form-group  mb-0">
                        <label className="uk-form-label"> Password</label>

                        <div className="uk-inline w-full">
                            <span className="uk-form-icon mb-4">
                                <i className="uil-lock"></i>
                            </span>
                            <input className="uk-input" type="password" name="password" placeholder="********" onChange={handleInputChange} />
                        </div>

                    </div>


                    <div className="uk-flex-middle" uk-grid>
                        <div className="uk-width-expand@s">
                            <p> Don't have account <Link to="/registro">Sign up</Link></p>
                        </div>
                        <div className="uk-width-auto@s">
                            <input type="submit" value="Get Started" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}