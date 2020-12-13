import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { update } from "../../../actions";

class Block extends Component {
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;

    return (
      <div className="p-block">
        <input {...input} placeholder={label} type={type} onChange={update} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
  render() {
    // const props = this.props;
    return (
      <Field
        label="タスクを入力"
        name="name"
        type="text"
        component={this.renderField}
      />
    );
  }
}

const validate = (values) => {
  const errors = {};

  return errors;
};

const mapDispatchToProps = { update };

export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm({
    validate,
    form: "BlockForm",
  })(Block)
);
