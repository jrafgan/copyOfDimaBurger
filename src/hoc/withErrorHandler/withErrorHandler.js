import React, {Component, Fragment} from 'react';
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null
      };

      this.state.responseInterceptor = axios.interceptors.response.use(res => res, (error) => {
        this.setState({error});
      });
    }

    componentWillUnmount() {
      axios.interceptors.response.eject(this.state.responseInterceptor);
    }

    errorDismissed = () => {
      this.setState({error: null});
    };

    render() {
      return (
        <Fragment>
          <Modal show={this.state.error} closed={this.errorDismissed}>
            Something wrong happened
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  }
};

export default withErrorHandler;
