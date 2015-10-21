import React, { PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Vote {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    const {
      children,
      className,
      style,
    } = this.props;

    return (
      <div
        className={ `${ className } flex flex-column` }
        style={ style }>
        <div
          style={ styles.upVote }
          className="icon ion-arrow-up-b">
        </div>
        3
        <div
          style={ styles.downVote }
          className="icon ion-arrow-down-b">
        </div>
      </div>
    );
  }
}

const styles = {
  upVote: {},
  downVote: {},
};
