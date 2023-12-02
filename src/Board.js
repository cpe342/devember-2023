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
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
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
    console.log(`printing ${this.props.nrows} x ${this.props.ncols}`)
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        row.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log(`I am in flipCellsAround`);
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    // flip self
    // flip north
    // flip south
    //flip east
    //flip west

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // TODO: write this method
    // this.setState({ board, hasWon });
  }


  /** Render game board or winning message. */

  render() {
    let tableBoard = [];

    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        const coordinate = `${i}-${j}`;
        row.push(<Cell key={coordinate} isLit={this.state.board[i][j]} flipCellsAroundMe={() => this.flipCellsAround(coordinate)}></Cell>)
      }
      tableBoard.push(<tr key={i}>{row}</tr>);
    }

    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board
    return (
      <div>
        <h1>Lights Out</h1>
        <table className="Board">
          <tbody>
            {tableBoard}
          </tbody>
        </table>
      </div>
    )

    // TODO
  }
}


export default Board;
