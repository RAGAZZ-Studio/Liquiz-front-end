import hand from '../assets/img/handPointer.png'
import {Container} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


const PlayButtonGroup = () => {
  return (
    <Container>
          <div className="playButtonGroup d-flex justify-content-center">
            <button type="button" className='rect2 playText'>
              PLAY
            </button>
            <Image
              src={hand}
              height="100"
              className="d-inline-block align-top rounded mx-auto d-block pointerHand justify-content-center"
              alt="Pointer Hand"
              />
          </div>
    </Container>
            <img
              src={hand}
              height="100"
              className="d-inline-block align-top rounded mx-auto d-block pointerHand"
              alt="Pointer Hand"
              >
          </div>
        </Container>
    </Container>
  );
}

export default PlayButtonGroup
