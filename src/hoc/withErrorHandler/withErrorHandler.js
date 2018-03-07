import React, {Component, Fragment} from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class WithErrorHandler extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
      };

      this.state.id = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    errorDismissed = () => {
      this.setState({error: null});
    };

    componentWillUnmount() {
      axios.interceptors.response.eject(this.state.id);
    }

    render() {
      return (
        <Fragment>
          <Modal show={this.state.error} closed={this.errorDismissed}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;

//
// const Orders = (props) => <h1>Orders</h1>;
//
// const someComp = withErrorHandler(Orders);