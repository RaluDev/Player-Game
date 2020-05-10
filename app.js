/*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
    constructor() {
      this.div = Player.display();
      this.move();
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


    })

  }


    // afisarea div-ului
    static display() {
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
  
      document.body.appendChild(div);
  
  
  
      return div;
  
    }
  }

  const player1 = new Player();
  
  