import Modal from 'react-modal';
import React from 'react';
import ChartsOfWeather from '../../containers/ChartsOfWeather/ChartsOfWeather';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    height                : '400px',
    width                 : '60%',
    transform             : 'translate(-50%, -50%)'
  }
};

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root')
class ModalComponent extends React.Component {
  render() {
    return <Modal
      isOpen={this.props.isOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ChartsOfWeather 
        lat={this.props.lat}
        lng={this.props.lng}
      />
    </Modal>
  }
}
export default ModalComponent;