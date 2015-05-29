import React from 'react'; // eslint-disable-line no-unused-vars
import Input from 'react-bootstrap/lib/Input'; // eslint-disable-line no-unused-vars
import ButtonInput from 'react-bootstrap/lib/ButtonInput'; // eslint-disable-line no-unused-vars
// import styles from './CreateAdmin.less'; // eslint-disable-line no-unused-vars
// import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars

// @withStyles(styles)
class CreateAdmin {

  render() {
    return (
      <form>
        <Input type="text" ref="input" />
        <ButtonInput bsSize="small">Child Text</ButtonInput>
        <ButtonInput type="reset" bsStyle="primary" />
        <ButtonInput type="submit" value="Submit Your Input" bsSize="large" />
      </form>
    );
  }

}

export default CreateAdmin;
