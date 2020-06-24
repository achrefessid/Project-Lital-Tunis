import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidation from "../validations/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues : {
      nom : state.users.getUserDetail.nom,
      marque : state.users.getUserDetail.marque,
      type : state.users.getUserDetail.type,
      collection : state.users.getUserDetail.collection,
      marque : state.users.getUserDetail.marque,
      reference : state.users.getUserDetail.reference,
      phase : state.users.getUserDetail.phase,
      mesure : state.users.getUserDetail.mesure,
      couleur : state.users.getUserDetail.couleur,
      quantite : state.users.getUserDetail.quantite,
      commentaire : state.users.getUserDetail.commentaire,
    }
  };
};

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nom"
                component={renderField}
                label="Nom :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="type"
                component={renderField}
                label="Type :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="collection"
                component={renderField}
                label="Collection :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="marque"
                component={renderField}
                label="Marque :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="reference"
                component={renderField}
                label="reference :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="phase"
                component={renderField}
                label="phase :"
              />
            </FormGroup>
            </Col>

            <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="mesure"
                component={renderField}
                label="mesure :"
              />
            </FormGroup>
          </Col>

            <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="couleur"
                component={renderField}
                label="couleur :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="quantite"
                component={renderField}
                label="quantite :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="commentaire"
                component={renderField}
                label="commentaire :"
              />
            </FormGroup>
          </Col>
          

        </FormGroup>





        

        

        

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
