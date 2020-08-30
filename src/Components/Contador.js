// timer só está fazendo a contagem regressiva e resetando
// quando o tempo acaba
// https://medium.com/@650egor/
// react-30-day-challenge-day-1-simple-timer-df85d0867553
// https://www.youtube.com/watch?v=jCuDrD5-TG8
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetState } from '../Actions';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
    };
  }

  // chama o timer na tela quando carrega
  componentDidMount() {
    this.tempo();
  }

  // atualiza o timer e reseta quando acaba
  componentDidUpdate() {
    const { timer } = this.state;
    const { respondido, timeReset, resetingState } = this.props;
    if (timer === 0) {
      clearInterval(this.inicioTempo);
    }
    if (respondido) {
      clearInterval(this.inicioTempo);
    }
    if (timeReset) {
      this.startTime();
      resetingState();
      this.tempo();
    }
  }

  startTime() {
    this.setState({
      timer: 30,
    });
  }

  tempo() {
    this.inicioTempo = setInterval(() => {
      this.setState(({ timer }) => ({
        timer: timer - 1,
      }));
    }, 1000);
  }

  styleCont() {
    const { timer } = this.state;
    if (timer > 20) {
      return { color: 'rgb(0,128,128)' };
    }
    if (timer > 10) {
      return { color: 'rgb(221, 127, 19)' };
    }
    return { color: 'rgb(212, 0, 0)' };
  }

  render() {
    const { timer } = this.state;
    return (
      <div>
        <h2
          className="contador"
          style={this.styleCont()}
        >
        Tempo restante: {timer}
        </h2>
      </div>
    );
  }
}

Contador.propTypes = {
  respondido: PropTypes.bool.isRequired,
  timeReset: PropTypes.bool.isRequired,
  resetingState: PropTypes.func.isRequired,
};

Contador.defaultProps = {
  respondido: false,
};

const mapStateToProps = (state) => ({
  respondido: state.answerReducer.respondido,
  timeReset: state.contadorReducer.timeReset,
});

const mapDispatchToProps = (dispatch) => ({
  resetingState: () => dispatch(resetState()),
});

Contador.propTypes = {
  respondido: PropTypes.bool.isRequired,
  resetingState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contador);
