import {Config} from '../index.js';

test('window.PageConfig', () => {
    const config = new Config();

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
