import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Orders extends Component {
  componentDidMount() {
    console.log("[Orders.js] Component did mount");
    this.props.onFetchOrders();
  }
  render() {
    let order = <Spinner />;
    if (!this.props.loading) {
      order = this.props.orders.map((order) => (
        <Order
          ingredients={order.ingredients}
          price={+order.price} //To convert string to num '+' symbol is added
          key={order.id}
        />
      ));
    }
    return <div>{order}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
