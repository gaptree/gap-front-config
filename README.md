# Gap Front Config

## Install

```
$ yarn add gap-front-config
```

## Usage

```javascript
import {config} from '../index.js';

config.load({
    k1: 'v1',
    k2: 'v2'
});

config.set('k3', 'v3');
config.set('k4', 'v4');

config.load({
    k5: 'v5',
    k6: 'v6'
});

config.get('k3');
config.get('k4');
```
