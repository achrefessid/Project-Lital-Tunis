import React, { Component } from "react";
import { Button as Btn, Icon, Label, Menu, Table, Dropdown} from "semantic-ui-react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ModalEdite from "./EditeUser";
import { getUsersFromApi, deleteUsersFromApi, editeUserFromApi} from "../../actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";


class VueUser extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    return (
      <div className="tab">
        <NavLink exact to="/signin">
        <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faUserPlus} /> 
            Ajouter un utilisateur
          </Button>
        </NavLink>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Pseudo</Table.HeaderCell>
              <Table.HeaderCell>Mot de passe</Table.HeaderCell>
              <Table.HeaderCell className="edit">Editer</Table.HeaderCell>
              <Table.HeaderCell>Supprimer</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.users.map((el) => (
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>{el.userPost}</Label>
                  {el.userName}
                </Table.Cell>
                <Table.Cell>{el.passWord}</Table.Cell>
                <Table.Cell>
                  <ModalEdite el={el} />{" "}
                </Table.Cell>
                <Table.Cell>
                  <button
                    class="ui button"
                    title="Supprimer"
                    onClick={() => {
                      this.props.delete(el.id);
                    }}
                  >
                    Supprimer
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>













          <Table.Footer>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getUsersFromApi()),
  delete: (id) => dispatch(deleteUsersFromApi(id)),
  edite: (el) => dispatch(editeUserFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VueUser);
