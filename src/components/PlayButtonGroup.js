import hand from '../assets/img/handPointer.png'
import {Container} from 'react-bootstrap'


const PlayButtonGroup = () => {
  return (
    <Container>
          <div className="playButtonGroup d-flex justify-content-center">
            <button type="button" className='rect2 playText'>
              PLAY
            </button>
            <img
              src={hand}
              height="100"
              className="d-inline-block align-top rounded mx-auto d-block pointerHand"
              alt="Pointer Hand"
              />
          </div>
    </Container>
  );
}

export default PlayButtonGroup
