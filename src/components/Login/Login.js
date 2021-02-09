import React from 'react'

function Login() {
    return (
        <div>
            <h2 className="mt-5 text-capitalize">log in</h2>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    <form>
                        <div className="form-group">
                            <label>UserName</label>
                            <input type="email" className="form-control" aria-describedby="usernameHelp" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login