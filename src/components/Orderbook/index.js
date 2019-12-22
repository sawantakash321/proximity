import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import styled from "styled-components"
import { websocketMessage } from '../../actions'
import { buildPayload } from '../../helpers/orderbook'
import CONSTANTS from "../../constants/global"
import { isWebsocketConnected, getBuys, getSells } from '../../selectors/websocket'




const OrderBook = props => {


  useEffect(() => {
    if (props.isWebsocketConnected) {
      props.sendWebsocketRequest(buildPayload(CONSTANTS.TYPES.SUBSCRIBE, CONSTANTS.CHANNEL_NAMES.ORDERBOOK, [CONSTANTS.SYMBOLS.BTCUSD]))

    }

    return () => {
      console.log('cleanup')
    };

  }, [props.isWebsocketConnected])


  return (
    <table>
      <thead>

        <tr>
          <th>Price</th>
          <th>Size</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>

        {props.buys.map((buy, index, self) => {
          return (
            <tr key={index}>
              <td>{buy.limit_price}</td>
              <td>{buy.size}</td>
              <td></td>
            </tr>
          )
        })
        }
      </tbody>



    </table>

  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    isWebsocketConnected: isWebsocketConnected(state),
    buys: getBuys(state) || [],
    sells: getSells(state) || []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendWebsocketRequest: data => {
      dispatch(websocketMessage.sendMessage(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook);
