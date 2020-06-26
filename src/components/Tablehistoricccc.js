import React ,{useEffect} from "react";
import BootstrapTable from "react-bootstrap-table-next";
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

/*-Tableau------------------------------------------------------------------------*/
const TableHistoric = (props) => {
    useEffect(()=>
    {props.getHistory()}
    )
    
    const columns = [{
      dataField: 'id',
      text: 'ID',
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          console.log(e);
          console.log(column);
          console.log(columnIndex);
          console.log(row);
          console.log(rowIndex);
          alert('Click on Product ID field');
        },
        onMouseEnter: (e, column, columnIndex, row, rowIndex) => {
          console.log(e);
          console.log(column);
          console.log(columnIndex);
          console.log(row);
          console.log(rowIndex);
          console.log('onMouseEnter on Product ID field');
        }
      }
    }, {
      dataField: 'name',
      text: 'Name'
    }, {
      dataField: 'modele',
      text: 'Modéle'
    }];

  return (<div> 
      {props.historic.map(e=>e.operation)}
      <BootstrapTable keyField='id' data={ props.historic } columns={ columns } />

  </div>)
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
})(TableHistoric);
