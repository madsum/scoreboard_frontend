import React, { Component } from 'react'
import _ from 'lodash'
import { Table } from 'semantic-ui-react'
import CurdApi from '../../Utils/CurdApi'
import 'semantic-ui-css/semantic.min.css';
import './ScoreTable.css'

export class ScoreTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        column: null,
        data: "Loading...",
        direction: null,
    }
  }
  
  async componentDidMount() {
    try {
        let scores = await CurdApi.getAllScore();
        this.setState({ data: scores });
    } catch (error) {
        console.log(error);
    }
  }

    
  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state
    
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }
    
    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }
    
  render() {
    const { column, data, direction } = this.state
    
    return (
        <div>
             <h3  className="scoreTitle">Score Board</h3>
             <h5 className="h4">Click table title to sort ascending or descending</h5>
          <div>
              {
                Array.isArray(this.state.data) ?

                <Table data-test="ScoreTableComponent" sortable celled fixed>
                  <Table.Header data-test="TableHeader">
                    <Table.Row>
                    <Table.HeaderCell
                        sorted={column === 'id' ? direction : null}
                        onClick={this.handleSort('id')}
                      >
                        ID
                      </Table.HeaderCell>

                      <Table.HeaderCell
                        sorted={column === 'team' ? direction : null}
                        onClick={this.handleSort('team')}
                      >
                        Team
                      </Table.HeaderCell>
                      <Table.HeaderCell
                        sorted={column === 'point' ? direction : null}
                        onClick={this.handleSort('point')}
                      >
                        Point
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {_.map(data, ({id, team, point }) => (
                      <Table.Row key={team}>
                        <Table.Cell>{id}</Table.Cell>
                        <Table.Cell>{team}</Table.Cell>
                        <Table.Cell>{point}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
                : <h1>{this.state.data}</h1>
              }
          </div>
          </div>
        )
    }
}
    

export default ScoreTable
