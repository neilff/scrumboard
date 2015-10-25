const DEFAULT_SETTINGS = {
  roomSettings: [
    {
      id: 'pokerMode',
      type: 'checkbox',
      text: 'Enable Poker Mode',
      defaultValue: false
    },
    {
      id: 'theme',
      type: 'select',
      text: 'Set Theme',
      defaultValue: 'default',
      options: [
        {
          key: 'default',
          value: 'Default'
        },
        {
          key: 'columns',
          value: 'Columns'
        },
        {
          key: 'boat',
          value: 'Boat'
        }
      ]
    },
  ],
  boardSize: '1024px'
};

export default DEFAULT_SETTINGS;
