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
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "username",
      text: "Nom de l'intervenant",
    },
    {
      dataField: "name",
      text: "Nom du produit",
    },
    {
      dataField: "operation",
      text: "Operation",
    },
    {
      dataField: "modele",
      text: "Modéle",
    },
    {
      dataField: "date",
      text: "Date",
    },
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
        >
          {(props) => (
            <div>
              <Row>
                {/*-search-------------------*/}
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()} //mta3 123 ili tbadil
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
