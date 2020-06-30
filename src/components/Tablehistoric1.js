import React ,{useEffect} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";  
import paginationFactory from "react-bootstrap-table2-paginator";          
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteUser,  postUserCreate, putUserUpdate} from "../actions/productAction";
import {getHistory} from "../actions/historicAction";

const defaultSorted = [         
  {
    dataField: "id",
    order: "asc",
  },
];

const TableHistoric = (props) => {
    useEffect(()=>
    {props.getHistory()}
    ,[]);


    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true,
        headerStyle: () => {
          return { width: "5%" };
        },
      }, {
        dataField: 'name',
        text: 'Name',
        filter: textFilter()
      }, {
        dataField: 'operation',
        text: 'Operation',
        filter: textFilter()
      }, {
        dataField: 'modele',
        text: 'Modéle',
        filter: textFilter({
          onFilter: filterVal => console.log(`Filter Value: ${filterVal}`)
        })
      }, {
      dataField: 'date',
      text: 'Date',
      filter: dateFilter()
      }
    
    
    ];
      
      function afterFilter(newResult, newFilters) {
        console.log(newResult);
        console.log(newFilters);
      }
    
return (
  <Container>
    {props.historic.map(e=>e.operation)}
    <BootstrapTable
        bootstrap4
        keyField='id' 
        data={ props.historic } 
        columns={ columns } 
        filter={ filterFactory({ afterFilter }) } />
</Container>
)
};
/*--------------------------------------------------------------------------------*/
const mapStateToProps = (state) => {
    return {
      historic: state.historicReducer
    };
  };

export default connect(mapStateToProps, {
  postUserCreate,
  putUserUpdate,
  deleteUser,
  getHistory
})
(TableHistoric)