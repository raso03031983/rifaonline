import React from "react";
import PropTypes from "prop-types";

/**********************/
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button";

const propTypes = {
  pageTitle: PropTypes.string,
  onSubmit: PropTypes.func,
  errors: PropTypes.objectOf({}),
  initialData: PropTypes.objectOf({}),
};

const defaultProps = {
  //categorias: [],
  onSubmit: () => {},
  errors: {},
  initialData: {},
};

function Modal(props) {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={false}
        aria-labelledby="form-dialog-title"
        fullWidth="true"
        maxWidth={props.modalSize}
      >
        <DialogTitle id="customized-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <FormControlLabel
                  control={<Checkbox disableRipple color="primary" />}
                  label="1"
                />
                <FormControlLabel
                  control={<Checkbox disableRipple color="primary" />}
                  label="2"
                />
                <FormControlLabel
                  control={<Checkbox disableRipple color="primary" />}
                  label="3"
                />
              </GridItem>
            </GridContainer>
          </form>
        </DialogContent>
        <DialogActions>
          {props.onClose}
          <Button onClick={() => alert()} color="info">
            Gravar Números
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
