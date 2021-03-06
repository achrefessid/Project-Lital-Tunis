import React, { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { connect } from "react-redux";
import {
  deleteUser,
  postUserCreate,
  putUserUpdate,
} from "../actions/productAction";
import { getHistory } from "../actions/historicAction";
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';




const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableHistoric = (props) => {
  useEffect(() => {
    props.getHistory();
  }, []);

  const columns = [
    {
      dataField: "date",
      text: "Date",
      filter: dateFilter(),
      headerStyle: () => {
        return { width: "25%" };
      },
    },
    {
      dataField: "username",
      text: "Nom de l'intervenant",
      filter: textFilter()
    },
    {
      dataField: "name",
      text: "Nom du produit",
      filter: textFilter()
    },

    {
      dataField: "modele",
      text: "Modéle",
      filter: textFilter()
    },
    {
      dataField: "operation",
      text: "Operation",
      filter: textFilter()
    }
  ];



  return (
    <Container>
      {props.historic ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.historic}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          filter={ filterFactory() } 
        >
          {(props) => (
            <div>
              <Row>
                {/*-search-------------------*/}
                <Col>
                  <div className="float-right">
                    <SearchBar
                      className="styleb"
                      {...props.searchProps}
                      placeholder="Search .."
                    />
                  </div>
                </Col>
              </Row>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
                filter={ filterFactory() }
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        /*-search---------------------- */
        <div className="text-center">
          {props.errorUsersList ? (
            <h4>{props.errorUsersList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};
/*--------------------------------------------------------------------------------*/
const mapStateToProps = (state) => {
  return {
    historic: state.historicReducer,
  };
};

export default connect(mapStateToProps, {
  postUserCreate,
  putUserUpdate,
  deleteUser,
  getHistory,
})(TableHistoric);