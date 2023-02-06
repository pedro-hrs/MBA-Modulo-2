import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {
  currentPlayer: string = 'O';
  winner: string = '';
  board: string[][] = [
    ['', '',''],
    ['', '',''],
    ['', '',''],
  ]
  processPlay(line: number, col:number){
    // Registra jogada
    if(this.board[line][col] == '' && this.winner == ''){
      this.board[line][col] = this.currentPlayer
      
      if(this.verifyWinner(this.currentPlayer)){
        this.winner = this.currentPlayer
      }
      this.currentPlayer = this.changePlayer(this.currentPlayer)
    }
  }
  changePlayer(currentPlayer: string):string{
    return currentPlayer == 'O' ? 'X' : 'O'
  }
  restartGame(){
    this.currentPlayer = 'O'
    this.winner = ''
    this.board = [
      ['', '',''],
      ['', '',''],
      ['', '',''],
    ]
  }
  verifyWinner(player: string): boolean{
    
    for (let i=0; i < this.board.length; i++ ){
      // Verifica cada linha
      if(this.board[i][0] == player &&
        this.board[i][1] == player &&
        this.board[i][2] == player){
          return true
      }

      // Verifica cada coluna
      if(this.board[0][i] == player &&
        this.board[1][i] == player &&
        this.board[2][i] == player){
          return true
      }

      // Verifica cada diagonal
      if(this.board[0][0] == player &&
        this.board[1][1] == player &&
        this.board[2][2] == player){
          return true
      }
      if(this.board[0][2] == player &&
        this.board[1][1] == player &&
        this.board[2][0] == player){
          return true
      }
    }

    return false
  }
}
