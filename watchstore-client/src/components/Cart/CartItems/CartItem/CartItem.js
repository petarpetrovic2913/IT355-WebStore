import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { removeCartItem, getCart } from '../../../../store/actions/cartActions';
import { Button, Table } from 'semantic-ui-react';

class CartItem extends Component {
  onDelete = async () => {
    const id = this.props.content.cartItemId;
    await this.props.removeCartItem(id);
    await this.props.getCart();
  };

  render() {
    const { productName } = this.props.content.product;
    const { quantity, totalPrice } = this.props.content;
    return (
      <Fragment>
        <Table.Row>
          <Table.Cell width={3}>{productName}</Table.Cell>
          <Table.Cell width={3}>{quantity}</Table.Cell>
          <Table.Cell width={3}>{totalPrice}</Table.Cell>
          <Table.Cell width={2}>
            <Button color="red" onClick={this.onDelete}>
              Remove from cart
            </Button>
          </Table.Cell>
        </Table.Row>
      </Fragment>
    );
  }
}

const mapDispatchToProps = { removeCartItem, getCart };

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
