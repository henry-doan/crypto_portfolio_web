import React from 'react';
import { Table, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoins } from '../actions/coins';

class CoinList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCoins())
    this.interval = setInterval(() => dispatch(getCoins()), 6000)    
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  render() {
    const { coins } = this.props;
    return (
      <div>
        <Divider />
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              { ['Symbol', 'Name', 'Price'].map( header =>
                  <Table.HeaderCell key={header}>
                    {header}
                  </Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { coins.map( coin => {
              const { name, price, symbol, id, cmc_id } = coin
              return (
                <Table.Row key={id}>
                  <Table.Cell>
                    <Link to={`/coins/${cmc_id}`}>
                      { symbol }
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    { name }
                  </Table.Cell>
                  <Table.Cell>
                    ${ price }
                  </Table.Cell>
                </Table.Row>
                )
              })
            }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { coins: state.coins }
}

export default connect(mapStateToProps)(CoinList);