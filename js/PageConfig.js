export class PageConfig {
    constructor () {
        window.PageConfig = window.PageConfig || {};
        this.config = window.PageConfig;
    }

    set (key, val) {
        this.config[key] = val;
        return this;
    }

    get (key) {
        return this.config[key] || undefined;
    }

    del (key) {
        delete this.config[key];
        return this;
    }
}
