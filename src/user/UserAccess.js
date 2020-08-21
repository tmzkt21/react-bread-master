import React, {useState} from "react";
import { PageTemplate} from "../common/PageTemplate";
import './user-access.css'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const UserAccessTypes= {REQUEST: 'UserAccess/REQUEST', SUCCESS: 'UserAccess/SUCCESS', FAIL: 'UserAccess/FAIL'}
const UserAccessRequest = action => ({types: UserAccessTypes.REQUEST, payload: action.payload})
const UserAccessSuccess = action => ({types: UserAccessTypes.SUCCESS, payload: action.payload})
const UserAccessFail = action => ({types: UserAccessTypes.FAIL, payload: action.payload})

export const UserAccessReducer = (state, action) => {
    switch (action.type) {
        case UserAccessTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserAccessTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserAccessTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}


export const UserAccess = () => {
    const [userId,setUserId] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory();

    const SignInButton = e => {
        e.preventDefault()
        const userData = {
            userId: userId,
            password: password
        }
        axios.post(`http://localhost:8080/user/SignIn`, userData)
            .then(response => {
                    alert("로그인 성공 !")
                    console.log(JSON.stringify(response.data))
                    sessionStorage.setItem("userData", JSON.stringify(response.data))
                    history.push("/")
                }
            ).catch(
            error => {
                alert("로그인 실패 !")
                throw (error)
            }
        )

    }
    return <>
        <PageTemplate> <section className="Signin">

            <div className="h3-bread">&nbsp;</div>
            <form>
                <h3 >Sign In</h3>

                <div className="form-group">
                    <label>UserId</label>
                    <input type="email" className="form-control" onChange={e => setUserId(e.target.value)} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={e=>setPassword(e.target.value)} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={SignInButton}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>



        </section></PageTemplate>
    </>

}

