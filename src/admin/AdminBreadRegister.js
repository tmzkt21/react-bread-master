import React, {useEffect, useState} from 'react';
import {Button,} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from 'axios'
import MaterialTable from "material-table";
const BreadRegisterTypes = {REQUEST: 'AdminBreadRegister/REQUEST'}
const BreadRegisterRequest = action => ({type: BreadRegisterTypes.REQUEST, payload: action.payload})
export const BreadRegisterReducer = ( state, action ) => {
  switch (action.type) {
    case BreadRegisterTypes.REQUEST: return {...state, payload: action.payload}
    default: return state
  }
}


export const AdminBreadRegister = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/bread/findAll`)
        .then((res)=>{
          // alert("빵리스트를 가져옵니다")
          setData(res.data)
        })
        .catch(()=>{
          // alert("재시도 바랍니다")
        })
  },[])
  const columns = [
    {
      title:'빵이름',field:'breadName'
    },
      {
          title:'빵사진', field: 'breadImage'
      },
    {
      title:'빵사진보기용', field: 'breadImage', editable: 'never',
      render: rowData => <img src={rowData.breadImage} style={{width: 50, borderRadius: '50%'}} alt="" />
    },
      {
          title:'빵디테일사진', field: 'breadImage'
      },
      {
          title:'빵사진보기용', field: 'breadImageDetail', editable: 'never',
          render: rowData => <img src={rowData.breadImageDetail} style={{width: 50, borderRadius: '50%'}} alt="" />
      },
    {
      title:'빵가격',field:'breadPrice'
    },
    {
      title:'상세설명',field:'breadDescription'
    }

  ]
  const editable = {
    onRowUpdate: (newData,oldData) =>
        new Promise((resolve,reject) =>{
          setTimeout(()=>{
            const dataUpdate = [...data]
            const index = oldData.tableData.id;
            dataUpdate[index] = newData
            setData([...dataUpdate])
            resolve()
            axios.post(`http://localhost:8080/bread/allUpdate`, [...dataUpdate])
                .then((res) => {
                })
                .catch(() => {
                  alert("통신실패")
                })
          })
        })
  }
  return (
      <>
        <table title="빵리스트" parent="Users" />
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              {/*<h5>상품</h5>*/}
            </div>
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body sell-graph">
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="clearfix"/>
              <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                  <MaterialTable title={"빵리스트"}
                               data={data}
                               columns={columns}
                               editable={editable}
                                 options={{
                                     headerStyle: {
                                         backgroundColor: '#01579b',
                                         color: '#FFF'
                                     },
                                     rowStyle: {
                                         backgroundColor: '#EEE',
                                     }
                                 }}/>
              </div>
            </div>
          </div>
        </div>
        <Button
            color="primary"
            size="small"
            variant="text"
            href="/productRegistration"
        >
          전체보기<ArrowRightIcon/>
        </Button>
      </>
  );
};



