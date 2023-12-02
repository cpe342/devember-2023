import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 **/

class Board extends Component {
  static defaultProps = {
    ncols: 5,
    nrows: 5,
    chanceLightStartsOn: 0.25
  };

  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // Initialize board of nrows x ncols
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        // Randomly determine isLit status of cell
        row.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        console.log(`flipping ${x}-${y}`)
        board[y][x] = !board[y][x];
      }
    }

    // Flip self
    flipCell(y, x);
    // Flip North
    flipCell(y + 1, x);
    // Flip South
    flipCell(y - 1, x);
    // Flip East
    flipCell(y, x + 1);
    // Flip West
    flipCell(y, x - 1);

    // Player has won when every cell isLit === false
    let hasWon = false;
    hasWon = board.every(row => row.every(cell => !cell))
    console.log(hasWon)

    this.setState({ board, hasWon });
  }

  // Render game board or winning message depending on hasWon
  makeTable() {
    // Display game board
    let tableBoard = [];
    // Accumulate cell components in the board
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        const coordinate = `${i}-${j}`;
        row.push(<Cell
          key={coordinate}
          isLit={this.state.board[i][j]}
          flipCellsAroundMe={() => this.flipCellsAround(coordinate)}
        ></Cell>)
      }
      tableBoard.push(<tr key={i}>{row}</tr>);
    }
    return (
      <table className='Board'>
        <tbody>{tableBoard}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.state.hasWon ? (
          <div className='winner'>
            <span className='neon-orange'>YOU</span>
            <span className='neon-blue'>WIN!</span>
          </div>
        ) : (
          <div>
            <div className='Board-title'>
              <div className='neon-orange'>Lights</div>
              <div className='neon-blue'>Out</div>
            </div>
            {this.makeTable()}
          </div>
        )}
      </div>
    );
  }
}


export default Board;
