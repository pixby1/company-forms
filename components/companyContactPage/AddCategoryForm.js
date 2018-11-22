import React from "react";
import * as superagent from "superagent";
import { Form, Card, Dropdown, Button } from "semantic-ui-react";
const testOptions = [
  {
    text: "Test",
    value: "test",
    key: 1
  },
  {
    text: "Test 2",
    value: "test 2",
    key: 2
  }
];

const requireFormData = ["nombre"];

export default class AddCategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formError: {
        nombre: false
      },
      parentCategory: "",
      isFormValid: true
    };
  }

  validateFormData = willSubmit => e => {
    const addCategoryFormEls = $("form[name=addCategoryForm]")[0].elements;

    let isFormValid = true;
    const { formError } = this.state;
    const formData = {};

    requireFormData.forEach(field => {
      if (!addCategoryFormEls[field].value) {
        formError[field] = true;
        isFormValid = false;
      } else {
        formError[field] = false;
        formData[field] = addCategoryFormEls[field].value;
      }
    });

    this.setState({ isFormValid, formError }, () => {
      if (this.state.isFormValid && willSubmit) {
        const selectedParentCategory = this.props.categoriasEmpresasList.find(
          a => a._id === this.state.parentCategory
        );
        formData.id_padre = selectedParentCategory
          ? selectedParentCategory._id
          : "";
        formData.nivel = selectedParentCategory
          ? selectedParentCategory.nivel + 1
          : 0;
        this.submitCategoryForm(formData);
      }
    });
  };

  changeParentCategory = (e, data) => {
    this.setState({ parentCategory: data.value });
  };

  submitCategoryForm = formData => {
    if (this.props.isEditingCategory) {
      formData._id = this.props.editingCategory._id;
    }
    superagent
      .post(
        this.props.isEditingCategory
          ? `${hostname}/api/update-category`
          : `${hostname}/api/add-category`
      )
      .send(formData)
      .set("accept", "json")
      .end((err, res) => {
        if (!err) {
          console.log(res);
          this.props.closeModal();
        }
      });
  };

  componentDidMount() {
    if (this.props.isEditingCategory) {
      $("input[name=nombre]").val(this.props.editingCategory.nombre);
      this.setState({ parentCategory: this.props.editingCategory.id_padre });
    }
  }

  render() {
    const { formError, isFormValid } = this.state;

    const parentCategoryOptions = this.props.categoriasEmpresasList.map(
      (category, index) => {
        return {
          text: category.nombre,
          value: category._id,
          key: index + 1
        };
      }
    );

    parentCategoryOptions.splice(0, 0, { text: "None", value: "", key: 0 });
    return (
      <Card className="addCategoryFormContainer">
        <Card.Header>Nuevo Rubro</Card.Header>
        <Card.Content>
          <Form
            error={!isFormValid}
            name="addCategoryForm"
            className="addCategoryForm"
          >
            <Form.Input
              error={formError.nombre}
              name="nombre"
              label="Nombre"
              type="text"
              onChange={this.validateFormData(false)}
            />
            <Form.Field>
              <label>Pertenece a:</label>
              <Dropdown
                options={parentCategoryOptions}
                selection={true}
                onChange={this.changeParentCategory}
                value={this.state.parentCategory}
              />
            </Form.Field>
            <Form.Field>
              <Button onClick={this.validateFormData(true)} color="teal">
                Submit
              </Button>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}
