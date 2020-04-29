import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({ ...response.data[key], id: key });
        }
        this.setState({ orders: fetchedOrders, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }
  render() {
    let order = <Spinner />;
    if (!this.state.loading) {
      order = this.state.orders.map((order) => (
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

export default withErrorHandler(Orders, axios);
