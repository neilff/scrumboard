import React, { Component, PropTypes } from 'react';
import { partial } from 'ramda';
import { fromJS } from 'immutable';
import DEFAULT_SETTINGS from '../../../shared/settings';

import RoomOption from './RoomOption';

const roomSettings = fromJS(DEFAULT_SETTINGS.roomSettings);

class RoomSettings extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    toggleRoomSettings: PropTypes.func.isRequired,
    changeSettings: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    clearRoom: PropTypes.func.isRequired,
  }

  state = {
    pokerMode: this.props.settings.get('pokerMode'),
    theme: this.props.settings.get('theme'),
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pokerMode: nextProps.settings.get('pokerMode'),
      theme: nextProps.settings.get('theme'),
    });
  }

  onChange(key, value) {
    this.setState({
      [key]: value,
    });
  }

  onReset(e) {
    e.preventDefault();

    const { settings, toggleRoomSettings } = this.props;

    this.setState({
      pokerMode: settings.get('pokerMode'),
      theme: settings.get('theme'),
    });

    toggleRoomSettings();
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.state;
    const { changeSettings, toggleRoomSettings } = this.props;

    changeSettings(data);
    toggleRoomSettings();
  }

  render() {
    const {
      name,
      isVisible,
      toggleRoomSettings,
      clearRoom,
    } = this.props;

    const state = this.state;

    const {
      onChange,
      onSubmit,
    } = this;

    const popupClasses = isVisible ?
      { ...styles.popupContainer, ...styles.isVisible } :
      { ...styles.popupContainer };

    return (
      <div
        onClick={ (e) => e.stopPropagation() }
        className="flex flex-auto mr2 h3">
        <div className="flex flex-center">
          <button
            onClick={ toggleRoomSettings }
            style={ styles.menuIcon }
            className="btn black flex flex-center">
            <i
              style={ styles.iconButton }
              className="icon ion-android-menu" />
            { name }
          </button>
        </div>
        <div
          style={ popupClasses }
          className="fixed flex flex-column border-top border-right p2 black">
          <div className="flex-auto mb2">
            <div className="h4">Rules</div>
            <hr className="bg-silver mb2" />

            <form onSubmit={ onSubmit.bind(this) }>
              {
                roomSettings.map(i => {
                  return (
                    <RoomOption
                      key={ i.get('id') }
                      id={ i.get('id') }
                      type={ i.get('type') }
                      text={ i.get('text') }
                      value={ state[i.get('id')] }
                      options={ i.get('options') }
                      onChange={ partial(onChange, [i.get('id')]).bind(this) } />
                  );
                })
              }

              <div className="flex flex-center mb2">
                <div className="flex-auto h5">
                </div>
                <div className="flex-end">
                  <button
                    type="submit"
                    className="btn btn-outline blue h6 mr2">
                    Apply
                  </button>
                  <button
                    type="reset"
                    onClick={ this.onReset.bind(this) }
                    className="btn btn-outline red h6">
                    Cancel
                  </button>
                </div>
              </div>
            </form>

            <div className="h4">Maintenance</div>
            <hr className="bg-silver mb2" />

            <div className="flex flex-center mb2">
              <div className="flex-auto h5">
                Clear Room
              </div>
              <div className="flex-end">
                <button
                  type="button"
                  onClick={ clearRoom }
                  className="btn btn-outline black h6">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  menuIcon: {
    display: 'inline-block',
    fontWeight: '100',
    padding: '0 10px',
  },
  isVisible: {
    opacity: '1',
    visibility: 'visible',
  },
  iconButton: {
    padding: '0 1rem 0 0',
  },
  popupContainer: {
    background: 'rgb(248, 248, 248)',
    bottom: '52px',
    left: '0',
    opacity: '0',
    transition: 'opacity 120ms, visibility 120ms',
    visibility: 'hidden',
    width: '25rem',
  },
  popupArrow: {
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid #0074d9',
    left: '0.5rem',
    position: 'absolute',
    width: '0',
  },
};

export default RoomSettings;
