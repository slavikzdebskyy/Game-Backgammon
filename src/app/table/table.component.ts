import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
	feild: any = [
		{f: ['checker black', 'checker black', 'checker black', 'checker black', 'checker black']},
		{f: []},
		{f: []},
		{f: []},
		{f: ['checker white', 'checker white', 'checker white']},
		{f: []},
		{f: ['checker white', 'checker white', 'checker white', 'checker white', 'checker white']},
		{f: []},
		{f: []},
		{f: []},
		{f: []},
		{f: ['checker black', 'checker black']},
		{f: ['checker white', 'checker white', 'checker white', 'checker white', 'checker white']},
		{f: []},
		{f: []},
		{f: []},
		{f: ['checker black', 'checker black', 'checker black']},
		{f: []},
		{f: ['checker black', 'checker black', 'checker black', 'checker black', 'checker black']},
		{f: []},
		{f: []},
		{f: []},
		{f: []},
		{f: ['checker white', 'checker white']},
		{f: []}
	]
	restartFeild: any[] = JSON.parse(JSON.stringify(this.feild));
	backTurnFeild: any[] = JSON.parse(JSON.stringify(this.feild));
	score = {
		black : 0,
		white : 0
	}
	netBlack = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
	netWhite = [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24];
	kub1: number = 0;
	kub2: number = 0;
	turnBW: boolean = true; 							// true - black is turn; false - white is turn;
	messageTurn: string;
	massageGameOver: string;
	coordinatesB: number[] = [];
	coordinatesW: number[] = [];
	kubikVisible: boolean = false;				//	if true - can't change value cubes
	nextPlayerVisible: boolean = false;  	//	visible or hidden button end turn and change player
	undoVisible: boolean = false;					//	undo button
	kub1Disable: boolean = false;					//	opacity cubes if is turn
	kub2Disable: boolean = false;					//	opacity cubes if is turn	
	tableDisable: boolean = false;
	blackIsHome: boolean = false;
	whiteIsHome: boolean = false;
	gameOverVisible: boolean = false;	
	outFeildB: any = [];
	outFeildW: any = [];
	outFeildBUndo: any = [];
	outFeildWUndo: any = [];
	diceClass1 = 'kubik';
	diceClass2 = 'kubik';
	double: number = 0;

	aDoubleUndo: number[] = [];
	xDoubleUndo: number[] = [];

  ngOnInit() {}

	ngDoCheck() {

		this.blackIsHome = this.ifChekersAtHome(this.netBlack, 'checker black');
		this.whiteIsHome = this.ifChekersAtHome(this.netWhite, 'checker white');

		this.diceClass1 = 'kubik ' + 'dice' + this.kub1;
		this.diceClass2 = 'kubik ' + 'dice' + this.kub2;
		
		if(this.turnBW){
			this.messageTurn = 'Blacks is going ...'
			if(this.outFeildB.length > 0) {
				this.tableDisable = true;
			} else {
				this.tableDisable = false;
			}
		} else {
			this.messageTurn = 'White is going ...'
			if(this.outFeildW.length > 0){
				this.tableDisable = true;
			} else {
				this.tableDisable = false;
			}
		}
	
		if(this.kub1 === this.kub2){
			if(this.double < 1) {
				this.undoVisible = false;
			}
			if(this.double < 2){
					this.kub1Disable = false;
					this.kub2Disable = false;
			}	else {
					this.kub1Disable = true;
					this.kub2Disable = false;
			}
			if(this.double >= 4){
				this.tableDisable = true;
				this.kub2Disable = true;
				this.nextPlayerVisible = true;
			}	
		}
		if(this.kub2Disable){
			this.tableDisable = true;
		}
		this.ifGameOver();
	}//	END of ngDoCheck()

	ifChekersAtHome (array, check) {
		let count = 0;
		for(let i = 0; i < 18; i++){
			if(this.feild[array[i]].f[0] != check){
				count++;
			}
		}
		if(count === 18) {
			return true;
		} else {
			return false;			
		}
	}//	END of ifChekersAtHome ()

	returnNextCoordinat (x:number, netArray:number[], coordArray:number[]) {	
		let a;
		let b;
		let countA = 0;
		let countB = 0;
		for(let i = 0; i < netArray.length; i++){
			if(netArray[i] === x) {
				a = i + this.kub1;
				b = i + this.kub2;
			}
		}
		if(a < 24) {
			coordArray.push(netArray[a]);
		}	else {
			if(this.turnBW && this.blackIsHome || !this.turnBW && this.whiteIsHome) {
				for(let j = x - 5; j < x; j++){
					if(this.feild[j].f.length != 0){
						countA++;
					}
				}
				if(countA === 0 || a === 24) {
					coordArray.push(netArray[netArray.length - 1]);
				}	else {
					coordArray.push(netArray[a - this.kub1]);
				}		
			} else {
				coordArray.push(netArray[a - this.kub1]);
			}
		}
		if(b < 24) {
			coordArray.push(netArray[b]);
		}	else {
			if(this.turnBW && this.blackIsHome || !this.turnBW && this.whiteIsHome) {
				for(let k = x - 5; k < x; k++){
					if(this.feild[k].f.length != 0){
						countB++;
					}
				}
				if(countB === 0 || b === 24) {
					coordArray.push(netArray[netArray.length - 1]);
				} else {
					coordArray.push(netArray[a - this.kub1]);
				}	
			} else {
				coordArray.push(netArray[b - this.kub2]);
			}
		}
	}//	END of returnBlackCoordinat (x)

	moveIt (a:any, b:any, checker:string): any {
		this.feild[a].f.pop(checker);
		this.feild[b].f.push(checker);
	}//	END of 	moveItBlack ()

	turn (x) {
		let len = this.feild[x].f.length;
		if(this.turnBW) {         // is black's turn ?
			this.coordinatesB = [];
			this.returnNextCoordinat(x, this.netBlack, this.coordinatesB);			
			if(this.feild[x].f[0] === 'checker black'){			// is clicked checker is black ?
				if(this.kub1 === this.kub2){
					if(this.feild[this.coordinatesB[0]].f[0] === 'checker black' || this.feild[this.coordinatesB[0]].f[0] === undefined || this.coordinatesB[0] > 23 || this.feild[this.coordinatesB[0]].f[0] === 'checker white' && this.feild[this.coordinatesB[0]].f.length === 1){
						if(this.feild[this.coordinatesB[0]].f[0] === 'checker white' && this.feild[this.coordinatesB[0]].f.length === 1 && this.coordinatesB[0] < 24){
							this.feild[this.coordinatesB[0]].f.pop();
							this.outFeildW.push('checker white');
						}
						if(x != this.coordinatesB[0]){
							this.xDoubleUndo.push(x);
							this.aDoubleUndo.push(this.coordinatesB[0]);
							this.moveIt(x, this.coordinatesB[0], 'checker black');						
							this.undoVisible = true;	
							this.double++;
						}
					} 
				} else {
					if(!this.kub1Disable) {
						if(this.feild[this.coordinatesB[0]].f[0] === 'checker black' || this.feild[this.coordinatesB[0]].f[0] === undefined || this.coordinatesB[0] > 23 || this.feild[this.coordinatesB[0]].f[0] === 'checker white' && this.feild[this.coordinatesB[0]].f.length === 1){
							if(this.feild[this.coordinatesB[0]].f[0] === 'checker white' && this.feild[this.coordinatesB[0]].f.length === 1 && this.coordinatesB[0] < 24){
								this.feild[this.coordinatesB[0]].f.pop();
								this.outFeildW.push('checker white');
							}
							if(x != this.coordinatesB[0]){
								this.moveIt(x, this.coordinatesB[0], 'checker black');
								this.kub1Disable = true;
								this.undoVisible = true;
							}			
						}
					} else {
							if(this.feild[this.coordinatesB[1]].f[0] === 'checker black' || this.feild[this.coordinatesB[1]].f[0] === undefined || this.coordinatesB[1] > 23 || this.feild[this.coordinatesB[1]].f[0] === 'checker white' && this.feild[this.coordinatesB[1]].f.length === 1){
								if(this.feild[this.coordinatesB[1]].f[0] === 'checker white' && this.feild[this.coordinatesB[1]].f.length === 1 && this.coordinatesB[1] < 24){
									this.feild[this.coordinatesB[1]].f.pop();
									this.outFeildW.push('checker white');
								}
								if(x != this.coordinatesB[1]){
									this.moveIt(x, this.coordinatesB[1], 'checker black');
									this.kub2Disable = true;
									this.tableDisable = true;
									this.nextPlayerVisible = true;
								}
							}
					}
				}
			}
		}	else {	 // is white's turn ?
			this.coordinatesW = [];
			this.returnNextCoordinat(x, this.netWhite, this.coordinatesW);			
			if(this.feild[x].f[0] === 'checker white'){			// is clicked checker is white ?
				if(this.kub1 === this.kub2){
					if(this.feild[this.coordinatesW[0]].f[0] === 'checker white' || this.feild[this.coordinatesW[0]].f[0] === undefined || this.coordinatesB[0] > 23 || this.feild[this.coordinatesW[0]].f[0] === 'checker black' && this.feild[this.coordinatesW[0]].f.length === 1){
						if(this.feild[this.coordinatesW[0]].f[0] === 'checker black' && this.feild[this.coordinatesW[0]].f.length === 1 && this.coordinatesB[0] < 24){
							this.feild[this.coordinatesW[0]].f.pop();
							this.outFeildB.push('checker black');
						}
						if(x != this.coordinatesW[0]){
							this.xDoubleUndo.push(x);
							this.aDoubleUndo.push(this.coordinatesW[0]);
							this.moveIt(x, this.coordinatesW[0], 'checker white');						
							this.undoVisible = true;	
							this.double++;
						}
					} 
				} else {
					if(!this.kub1Disable) {
						if(this.feild[this.coordinatesW[0]].f[0] === 'checker white' || this.feild[this.coordinatesW[0]].f[0] === undefined || this.coordinatesB[0] > 23 || this.feild[this.coordinatesW[0]].f[0] === 'checker black' && this.feild[this.coordinatesW[0]].f.length === 1){
							if(this.feild[this.coordinatesW[0]].f[0] === 'checker black' && this.feild[this.coordinatesW[0]].f.length === 1 && this.coordinatesB[0] < 24){
								this.feild[this.coordinatesW[0]].f.pop();
								this.outFeildB.push('checker black');
							}
							if(x != this.coordinatesW[0]){
								this.moveIt(x, this.coordinatesW[0], 'checker white');
								this.kub1Disable = true;
								this.undoVisible = true;
							}			
						}
					} else {
							if(this.feild[this.coordinatesW[1]].f[0] === 'checker white' || this.feild[this.coordinatesW[1]].f[0] === undefined || this.coordinatesB[1] > 23  || this.feild[this.coordinatesW[1]].f[0] === 'checker black' && this.feild[this.coordinatesW[1]].f.length === 1){
								if(this.feild[this.coordinatesW[1]].f[0] === 'checker black' && this.feild[this.coordinatesW[1]].f.length === 1 && this.coordinatesB[1] < 24){
									this.feild[this.coordinatesW[1]].f.pop();
									this.outFeildB.push('checker black');
								}
								if(x != this.coordinatesW[1]){
									this.moveIt(x, this.coordinatesW[1], 'checker white');
									this.kub2Disable = true;
									this.tableDisable = true;
									this.nextPlayerVisible = true;
								}
							}
					}
				}
			}
		}
		if(len === this.feild[x].f.length) {
			this.nextPlayerVisible = true;
		}
	}//	END of turn()

	turnOutB () {
		let a = 12 - this.kub1;
		let b = 12 - this.kub2;
		let len = this.outFeildB.length;
		if(this.kub1 === this.kub2){		
			if(this.feild[a].f[0] === 'checker black' || this.feild[a].f[0] === undefined || this.feild[a].f[0] === 'checker white' && this.feild[a].f.length === 1){
				if(this.feild[a].f[0] === 'checker white' && this.feild[a].f.length === 1){
					this.feild[a].f.pop();
					this.outFeildW.push('checker white');
				}
			this.feild[a].f.push('checker black');
			this.outFeildB.pop();						
			this.undoVisible = true;	
			this.double++;
			} 
		} else {
			if(!this.kub1Disable) {
				if(this.feild[a].f[0] === 'checker black' || this.feild[a].f[0] === undefined || this.feild[a].f[0] === 'checker white' && this.feild[a].f.length === 1){
					if(this.feild[a].f[0] === 'checker white' && this.feild[a].f.length === 1){
						this.feild[a].f.pop();
						this.outFeildW.push('checker white');
					}
				this.feild[a].f.push('checker black');
				this.outFeildB.pop();
				this.kub1Disable = true;
				this.undoVisible = true;		
				}
			} else {
				if(this.feild[b].f[0] === 'checker black' || this.feild[b].f[0] === undefined || this.feild[b].f[0] === 'checker white' && this.feild[b].f.length === 1){
					if(this.feild[b].f[0] === 'checker white' && this.feild[b].f.length === 1){
						this.feild[b].f.pop();
						this.outFeildW.push('checker white');
					}
				this.feild[b].f.push('checker black');
				this.outFeildB.pop();
				this.kub2Disable = true;
				this.tableDisable = true;
				this.nextPlayerVisible = true;
				}
			}
		}
		if(len === this.outFeildB.length) {
			this.nextPlayerVisible = true;
		}
	}//	END of turnOutB ()

	turnOutW () {
		let a = 24 - this.kub1;
		let b = 24 - this.kub2;
		let len = this.outFeildW.length;
		if(this.kub1 === this.kub2){
			if(this.feild[a].f[0] === 'checker white' || this.feild[a].f[0] === undefined || this.feild[a].f[0] === 'checker black' && this.feild[a].f.length === 1){
				if(this.feild[a].f[0] === 'checker black' && this.feild[a].f.length === 1){
					this.feild[a].f.pop();
					this.outFeildB.push('checker black');
				}
			this.feild[a].f.push('checker white');
			this.outFeildW.pop();						
			this.undoVisible = true;	
			this.double++;
			} 
		} else {
			if(!this.kub1Disable) {
				if(this.feild[a].f[0] === 'checker white' || this.feild[a].f[0] === undefined || this.feild[a].f[0] === 'checker black' && this.feild[a].f.length === 1){
					if(this.feild[a].f[0] === 'checker black' && this.feild[a].f.length === 1){
						this.feild[a].f.pop();
						this.outFeildB.push('checker black');
					}
				this.feild[a].f.push('checker white');
				this.outFeildW.pop();
				this.kub1Disable = true;
				this.undoVisible = true;		
				}
			} else {
				if(this.feild[b].f[0] === 'checker white' || this.feild[b].f[0] === undefined || this.feild[b].f[0] === 'checker black' && this.feild[b].f.length === 1){
					if(this.feild[b].f[0] === 'checker black' && this.feild[b].f.length === 1){
						this.feild[b].f.pop();
						this.outFeildB.push('checker black');
					}
				this.feild[b].f.push('checker white');
				this.outFeildW.pop();
				this.kub2Disable = true;
				this.tableDisable = true;
				this.nextPlayerVisible = true;
				}
			}
		}
		if(len === this.outFeildW.length) {
			this.nextPlayerVisible = true;
		}
	}// turnOutW ()

	changeCubes () {
		this.kub1 = Math.floor((Math.random() * 6) + 1);
		this.kub2 = Math.floor((Math.random() * 6) + 1);
		this.kubikVisible = true;		
	}//	END of changeTurn()

	changeKubik () {
		if(!this.kub1Disable){
			let a = this.kub1;
			this.kub1 = this.kub2;
			this.kub2 = a;
		}
	}//	END of changeKubik()	

	undo () {
		this.feild = JSON.parse(JSON.stringify(this.backTurnFeild));
		this.outFeildB = JSON.parse(JSON.stringify(this.outFeildBUndo));
		this.outFeildW = JSON.parse(JSON.stringify(this.outFeildWUndo));
		this.nextPlayerVisible = false;
		this.undoVisible = false;
		this.kub1Disable = false;
		this.kub2Disable = false;	
		this.tableDisable = false;
		this.double = 0;
	}//	END of undo()

	nextTurn () {
		this.turnBW = !this.turnBW;
		this.kubikVisible = false;
		this.nextPlayerVisible = false;
		this.undoVisible = false;
		this.kub1Disable = false;
		this.kub2Disable = false;	
		this.tableDisable = false;
		this.double = 0;
		this.kub1 = 0;
		this.kub2 = 0;
		this.backTurnFeild = JSON.parse(JSON.stringify(this.feild));
		this.outFeildBUndo = JSON.parse(JSON.stringify(this.outFeildB));
		this.outFeildWUndo = JSON.parse(JSON.stringify(this.outFeildW));

	}//	END of nextTurn ()

	ifGameOver () {
		let countB = 0;
		let countW = 0;
		for(let i = 0; i < this.netBlack.length - 1; i++){
			if(this.feild[this.netBlack[i]].f[0] != 'checker black'){
				countB++;
			}
		}
		for(let i = 0; i < this.netWhite.length - 1; i++){
			if(this.feild[this.netWhite[i]].f[0] != 'checker white'){
				countW++;
			}
		}
		if(countB === 24) {
			this.massageGameOver = 'BLACKS  WIN';
			this.gameOverVisible = true;
			this.turnBW = true;
			this.score.black++;
			if(!this.blackIsHome){
				this.score.black++;
			}
		}
		if(countW === 24) {
			this.massageGameOver = 'WHITE  WIN';
			this.gameOverVisible = true;
			this.turnBW = false;
			this.score.white++;
			if(!this.whiteIsHome){
				this.score.white++;
			}
		}
		
	}//	END of gameOver () 

	continueMatch () {
		this.feild = JSON.parse(JSON.stringify(this.restartFeild));
		this.kubikVisible = false;
		this.nextPlayerVisible = false;
		this.undoVisible = false;
		this.kub1Disable = false;
		this.kub2Disable = false;	
		this.tableDisable = false;
		this.gameOverVisible = false;
		this.double = 0;
		this.kub1 = 0;
		this.kub2 = 0;
		this.outFeildB = [];
		this.outFeildW = [];
		
	}//	END of continueMatch ()

	reset () {
		this.feild = JSON.parse(JSON.stringify(this.restartFeild));
		this.turnBW = true;
		this.kubikVisible = false;
		this.nextPlayerVisible = false;
		this.undoVisible = false;
		this.kub1Disable = false;
		this.kub2Disable = false;	
		this.tableDisable = false;
		this.gameOverVisible = false;
		this.double = 0;
		this.kub1 = 0;
		this.kub2 = 0;
		this.outFeildB = [];
		this.outFeildW = [];
		this.score.black = 0;
		this.score.white = 0;

	}//	END of reset ()




}// END of class TableComponent
