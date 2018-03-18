window.render_compat_table = function(dataOrString, renderer, configuration) {

    /* Convert a string to the BCD data */
    let data = undefined;
    if (typeof dataOrString === 'string' || dataOrString instanceof String) {
        const dataParts = dataOrString.split('.');
        data = window.browser_compat_data;
        dataParts.forEach((elem) => {
            if (!data.hasOwnProperty(elem)) {
                throw new Error(`Unable to find data for "${dataOrString}" at "${elem}".`);
            }
            data = data[elem];
        });
    } else {
        data = dataOrString;
    }
    return renderer(data, configuration);
}
