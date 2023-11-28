const href = new URL(location.href);
const client_id = href.searchParams.get('client_id');
if (!/console/.test(client_id)) {
    const kc_form = document.getElementById('kc-form');
    const kc_social_providers = document.getElementById('kc-social-providers');
    if (kc_form && kc_social_providers) {
        const social_google = kc_social_providers.querySelector('ul>li>a#social-google');
        if (social_google) {
            kc_form.style.display = 'none';
            Array.from(kc_social_providers.children)
                .filter(el => el.tagName === 'HR' || (el.tagName === 'H4' && el.textContent === 'Or sign in with'))
                .forEach(el => (el.style.display = 'none'));
            social_google.click();
        }
    }
}