import hand from '../assets/img/handPointer.png'
import {Container} from 'react-bootstrap'
<<<<<<< HEAD
import Image from 'react-bootstrap/Image'
=======
>>>>>>> 805420f630bf27e0a2b7d4bfe1b4344a39e1efa2


const PlayButtonGroup = () => {
  return (
    <Container>
          <div className="playButtonGroup d-flex justify-content-center">
            <button type="button" className='rect2 playText'>
              PLAY
            </button>
<<<<<<< HEAD
            <Image
              src={hand}
              height="100"
              className="d-inline-block align-top rounded mx-auto d-block pointerHand justify-content-center"
              alt="Pointer Hand"
              />
          </div>
    </Container>
=======
            <img
              src={hand}
              height="100"
              className="d-inline-block align-top rounded mx-auto d-block pointerHand"
              alt="Pointer Hand"
              />
          </div>
        </Container>
>>>>>>> 805420f630bf27e0a2b7d4bfe1b4344a39e1efa2
  );
}

export default PlayButtonGroup
