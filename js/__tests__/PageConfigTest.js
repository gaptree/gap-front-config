import {PageConfig} from '../PageConfig.js';

test('window.PageConfig', () => {
    window.PageConfig = {
        k1: 'v1',
        k2: 'v2'
    };

    const config = new PageConfig();
    expect(config.get('k1')).toBe('v1');

    config.set('k3', 'v3');
    expect(window.PageConfig.k3).toBe('v3');

    const config2 = new PageConfig();
    expect(config2.get('k3')).toBe('v3');

    config2.set('k4', 'v4');
    expect(config.get('k4')).toBe('v4');

    config.del('k4');
    expect(config2.get('k4')).toBeUndefined();
});
