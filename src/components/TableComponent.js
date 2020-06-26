import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";  //serach
import paginationFactory from "react-bootstrap-table2-paginator";          //mta3 tabdil page 123
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteUser,  postUserCreate, putUserUpdate} from "../actions/productAction";

/*-mta3 search */
const { SearchBar } = Search;



/*-il id wil action walafihom i5tot, ki tinzil a3lihom ama ya3tik mi lowil li li5ér 
wala mi li5ér li lowél------------------------------------------------------------*/
const defaultSorted = [         
  {
    dataField: "id",
    order: "asc",
  },
];
/*--------------------------------------------------------------------------------*/
const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};
/*-Tableau------------------------------------------------------------------------*/
const TableComponent = (props) => {

const handleClick = (dispatch, row) => {
  
  swal({
    title: "Are you sure you want to delete this data ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      props.deleteUser(row)
      swal("User Data Successfully deleted", {
        icon: "success",
      });
    } else {
      swal("Data failed to delete");
    }
  });
}



  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,              //tab3in ili irodo il haja mi lowil ou mili5ér       
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "annee",
      text: "Année",
      sort: true,              //tab3in ili irodo il haja mi lowil ou mili5ér            
    },
    {
      dataField: "saison",
      text: "Saison",
      sort: true,              //tab3in ili irodo il haja mi lowil ou mili5ér   
    },
    {
      dataField: "createur",
      text: "Createur",
      sort: true,              //tab3in ili irodo il haja mi lowil ou mili5ér   
    },
    {
      dataField: "gamme",
      text: "Gamme",
      sort: true,              //tab3in ili irodo il haja mi lowil ou mili5ér   
    },
    {
      dataField: "sex",
      text: "Sex",
      sort: true,              //tab3in ili irodo il haja mi lowil ou mili5ér   
    },
    {
      dataField: "modele",
      text: "Modéle",
      sort: true,              //tab3in ili irodo il haja mi lowil ou mili5ér   
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,              //tab3in ili irodo il haja mi lowil ou mili5ér   
    },
    {
      dataField: "link",
      text: "Action",
/*-btn:details-edit-delete---------------------------------------------------------*/
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="red" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Détail
              </Button>
            </Link>
  
            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2"> 
                <FontAwesomeIcon icon={faEdit} /> Editer
              </Button>
            </Link>
  
            <Button color="red" className="mr-2" 
            onClick={() => handleClick(props.dispatch, row)}>
              <FontAwesomeIcon icon={faTrash} /> delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
      
          {(props) => (
            <div>

              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Ajouter un produit
                    </Button>
                  </Link>
                </Col>
                
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
          /*-search---------------------- */

                ) : (
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

export default connect(mapStateToProps, {
  postUserCreate,
  putUserUpdate,
  deleteUser
})(TableComponent);
