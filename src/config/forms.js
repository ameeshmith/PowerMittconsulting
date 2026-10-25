// PowerMitt Form Configuration
export const FORMS_CONFIG = {
  // Web3Forms Access Key
  // Free key can be obtained at https://web3forms.com
  // IMPORTANT SECURITY NOTE (OWASP A04):
  // Ensure "Domain Restriction" is enabled in the Web3Forms dashboard for this key,
  // whitelisting only 'powermitt.com.au' and 'ameeshmith.github.io' to prevent unauthorized third-party form submissions.
  web3FormsAccessKey: (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim()
};

