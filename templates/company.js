function renderCompanyPage(title, slug) {
    if (typeof renderAbout === 'function') {
        return renderAbout();
    }
    return '';
}
