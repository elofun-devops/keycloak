const href = new URL(location.href);
const client_id = href.searchParams.get('client_id');
if (!/console/.test(client_id)) {
    const kc_form = document.getElementById('kc-form');
    const kc_social_providers = document.getElementById('kc-social-providers');
    if (kc_form && kc_social_providers) {
        kc_form.style.display = 'none';
    }
}