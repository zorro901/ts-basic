// object oriented concepts

type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = "first" | "second"

// コマの位置を表すクラス
class Position {
    constructor(private suji: Suji,private dan :Dan) {
    }

    // パラメーターに渡された位置と現在の位置を比較するメソッド
    distanceFrom(position:Position,player:Player){
        if (player === 'first'){
            return{
                suji:Math.abs(position.suji - this.suji),
                dan: Math.abs(Number(position.dan) - Number(this.dan))
            }
        } else {
            return {
                suji:Math.abs(position.suji - this.suji),
                dan: -(Math.abs(Number(position.dan) - Number(this.dan))) // 段（縦の位置）は正負反転
            }
        }
    }
}

// コマを表すクラス
abstract class Piece {
    // Pieceクラスとサブクラスでアクセスできる
    protected position: Position

    // 初期化
    constructor(
        private readonly player:Player,
        suji:Suji,
        dan:Dan
    ) {
        // thisはclassの中って意味ここだとPieceクラスの中のposition
        this.position = new Position(suji,dan)
    }

    // メソッドの定義
    // コマの移動用のメソッド
    moveTo(position: Position) {
        this.position = position
    }

    // 移動できるかどうかを判定するメソッド
    abstract canMoveTo(position: Position,player:Player):boolean

}

class Osho extends Piece {
    // 王将のcanMoveToメソッドを実装
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position,player)
        return (distance.suji < 2 && distance.dan < 2)
    }
}

class Game {
    private pieces = Game.makePieces()
    private static makePieces(){
        return[
            new Osho('first',5,'1'),
            new Osho('second',5,"9")
        ]
    }
}