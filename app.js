/*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
    constructor() {
      this.div = Player.display();
      this.move();
      this.collideWall();
      // this.gameContainer = gameContainer;
    }
  
    // logica de miscare
  move() {
    console.log('miscare', this)
    const position = 20;
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp': this.div.style.top = `${parseInt(this.div.style.top) - position}px`;
          console.log('ArrowUp', this.div.style.top); break;
        case 'ArrowDown': this.div.style.top = `${parseInt(this.div.style.top) + position}px`; break;
        case 'ArrowLeft': this.div.style.left = `${parseInt(this.div.style.left) - position}px`; break;
        case 'ArrowRight': this.div.style.left = `${parseInt(this.div.style.left) + position}px`; break;

      }
      this.collideWall();


    })

  }


    // afisarea div-ului
    static display() {
      const gameContainer = document.querySelector('.gameContainer');
      const div = document.createElement('div');
      const { style } = div;
      style.width = "20px";
      style.height = "20px";
      style.backgroundColor = "yellow";
      style.position = "absolute";
      style.top = "20px";
      style.left = "20px";
      style.right = "20px";
      style.left = "20px";
  
      gameContainer.appendChild(div);
  
  
  
      return div;
  
    }

  //wall collision
  collideWall() {
    const gameContainer = document.querySelector('.gameContainer');
    let playerTop = parseInt(this.div.style.top);
    let playerBottom = parseInt(this.div.style.left);

    const maxHeight = gameContainer.offsetHeight;
    const maxWidth = gameContainer.offsetWidth;
    const move = 20;


    if (playerTop === maxHeight) {

      alert("Hit the wall down!")

    } else if (playerTop === - move) {
      alert("Hit the wall up!")

    } else if (playerBottom === - move) {
      alert("Hit the wall left!")

    } else if (playerBottom === maxWidth) {
      alert("Hit the wall right!")

    }
  }

  }

  const player1 = new Player();
  //collide apel
  player1.collideWall();

  
  //reload button
  document.getElementById('reload').addEventListener('click', function(){
    window.location.reload();
})
  
  