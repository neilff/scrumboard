import React, { PropTypes, Component } from 'react';
import Radium from 'radium';
import { partial } from 'ramda';

@Radium
export default class Vote extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    cardId: PropTypes.any.isRequired,
    voteUp: PropTypes.func.isRequired,
    voteDown: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  }

  render() {
    const {
      children,
      className,
      style,
      count,
      cardId,
      voteUp,
      voteDown,
    } = this.props;

    return (
      <div
        className={ `${ className } flex flex-column` }
        style={{ ...style, ...styles.base }}>
        <button
          style={{ ...styles.vote, ...styles.upVote }}
          className="gray btn icon ion-chevron-up"
          onClick={ partial(voteUp, [cardId]).bind(this) }>
        </button>
        { count }
        <button
          style={{ ...styles.vote, ...styles.downVote }}
          className="gray btn icon ion-chevron-down"
          onClick={ partial(voteDown, [cardId]).bind(this) }>
        </button>
      </div>
    );
  }
}

const styles = {
  base: {},
  vote: {
    padding: '0 0.35rem',
    fontSize: '12px',
  },
  upVote: {},
  downVote: {},
};
