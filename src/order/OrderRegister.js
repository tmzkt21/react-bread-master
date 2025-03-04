import React from "react";
import './order-register.css'
import { PageTemplate } from '../common/PageTemplate'
import styled from "styled-components";
import {Pagination} from "semantic-ui-react";
const OrderRegisterTypes= {REQUEST: 'OrderRegister/REQUEST', SUCCESS: 'OrderRegister/SUCCESS', FAIL: 'OrderRegister/FAIL'}
const OrderRegisterRequest = action => ({types: OrderRegisterTypes.REQUEST, payload: action.payload})
const OrderRegisterSuccess = action => ({types: OrderRegisterTypes.SUCCESS, payload: action.payload})
const OrderRegisterFail = action => ({types: OrderRegisterTypes.FAIL, payload: action.payload})

export const OrderRegisterReducer = (state, action) => {
    switch (action.type) {
        case OrderRegisterTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case OrderRegisterTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case OrderRegisterTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}


export const OrderRegister = () =>
	<PageTemplate>
		<section className="order">
		    <h1 className="h3-bread">  </h1>

		    <div className="sc-esjQYD goIgCJ">
		        <article className="sc-jnlKLf bCmhqn">
		            <div className="sc-VigVT cibeyu"><h2 className="sc-jTzLTM btRZwy">Order</h2></div>
		            <table className="fQMIPz">
		                <thead className="sc-kgAjT QollL">
		                <tr>
		                    <th scope="col" className="sc-cJSrbW gVXHZH">product</th>
		                    <th scope="col" className="sc-cJSrbW gVXHZH">Name (Option)</th>
		                    <th scope="col" className="sc-cJSrbW gVXHZH">price</th>
		                    <th scope="col" className="sc-cJSrbW gVXHZH">Quantity</th>
		                </tr>
		                </thead>
		                <tbody>
		                <tr>
		                    <td className="sc-hqyNC fvxYsy"></td>
		                    <td><img
		                        src="https://thebreadblue.com/data/item/1585656636/thumb-66y07ZmU6rO86rmc67mg64m0_1000x1000.png"
		                        className="fotorama__img"
		                    /></td>
		                    <td>
		                        <div>무화과 깜빠뉴</div>
		                        L/BLACK
		                    </td>
		                    <td>￦7,900</td>
		                    <td>1</td>
		                </tr>
		                </tbody>
		                <tfoot>
		                <tr>
		                    <td colSpan="1" className="sc-ksYbfQ eBRNqZ">Total</td>
		                    <td colSpan="2"></td>
		                    <td colSpan="1" className="sc-ksYbfQ eBRNqZ">￦59,300</td>
		                </tr>
		                </tfoot>
		            </table>
		            <div id="responsiveTotalDiv" className="sc-kvZOFW gAYafu">Total : ￦59,300</div>
		        </article>
		        <article className="sc-jnlKLf bCmhqn"><h3 className="sc-kIPQKe hRzZDy">Order Information</h3>
		            <form className="sc-eXEjpC eOBXHa">
		                <div className="NngVZ">
		                    <div className="sc-RefOD gBZRgU">name</div>
		                    <div className="sc-iQKALj fxDVnv">게스트</div>
		                </div>
		                <div className="NngVZ">
		                    <div className="sc-RefOD gBZRgU">address</div>
		                    <div className="sc-iQKALj fxDVnv">06001</div>
		                    <div className="sc-iQKALj sc-bwCtUz lgbbNn">서울 강남구 논현로189길 6 (압구정동)</div>
		                    <div className="sc-iQKALj sc-bwCtUz lgbbNn">주소</div>
		                </div>
		                <div className="NngVZ">
		                    <div className="sc-RefOD gBZRgU">email</div>
		                    <div className="sc-iQKALj fxDVnv">guest@guest.com</div>
		                </div>
		                <div className="NngVZ">
		                    <div className="sc-RefOD gBZRgU">phone</div>
		                    <div className="sc-iQKALj fxDVnv">010-1234-1234</div>
		                </div>
		            </form>
		        </article>
		        <div className="sc-hrWEMg SVQWq">
		            <button className="sc-eTuwsz fzBQRY">결제하기</button>
		        </div>
		    </div>
		</section>
	</PageTemplate>


