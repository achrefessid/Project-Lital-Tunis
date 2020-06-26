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
      annee : state.users.getUserDetail.annee,
      saison : state.users.getUserDetail.saison,
      createur : state.users.getUserDetail.createur,
      gamme : state.users.getUserDetail.gamme,
      sex : state.users.getUserDetail.sex,
      modele : state.users.getUserDetail.modele,
      name : state.users.getUserDetail.name,
      mesure : state.users.getUserDetail.mesure,
      photo : state.users.getUserDetail.photo,
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
                name="annee"
                component={renderField}
                label="Année :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="saison"
                component={renderField}
                label="Saison :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="createur"
                component={renderField}
                label="Createur :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="gamme"
                component={renderField}
                label="Gamme :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="sex"
                component={renderField}
                label="Sex :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="modele"
                component={renderField}
                label="Modéle :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Name :"
              />
            </FormGroup>
            </Col>

            <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="mesure"
                component={renderField}
                label="Mesure :"
              />
            </FormGroup>
          </Col>

            <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="photo"
                component={renderField}
                label="Photo :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="commentaire"
                component={renderField}
                label="Commentaire :"
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
