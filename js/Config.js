export class Config {
    constructor () {
        //window.PageConfig = window.PageConfig || {};
        //this.config = window.PageConfig;
        this.config = {};
    }

    load(data) {
        Object.assign(this.config, data);
        return this;
    }

    set(key, val) {
        this.config[key] = val;
        return this;
    }

    get(key) {
        return this.config[key] || null;
    }

    del(key) {
        delete this.config[key];
        return this;
    }
}
