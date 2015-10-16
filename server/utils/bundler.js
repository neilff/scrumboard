import webpack from 'webpack';
import config from '../../webpack.config.dev';

const compiler = webpack(config);

function init(app) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

export default init;
