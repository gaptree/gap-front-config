import {config} from '../index.js';

import '../__lib__/import-extra-data.js';

test('window.PageConfig', () => {
    expect(config.get('exKey11')).toBe('exVal11');

    config.load({
        k1: 'v1',
        k2: 'v2'
    });

    expect(config.get('k1')).toBe('v1');

    config.set('k3', 'v3');
    expect(config.get('k3')).toBe('v3');

    config.set('k4', 'v4');
    expect(config.get('k4')).toBe('v4');

    config.del('k4');
    expect(config.get('k4')).toBeNull();
});
