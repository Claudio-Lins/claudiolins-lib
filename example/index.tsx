import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { windowSize } from '../src/functions/index';
import { Button } from '../src/components/Button';

const App = () => {
  return (
    <div>
      <Button fill className="bg-pink-500">
        Botãoooooo
      </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
