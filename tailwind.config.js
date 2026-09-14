/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                surface: '#16191E',
                'surface-dim': '#111317',
                'surface-bright': '#242830',
                'surface-container-lowest': '#171A1F',
                'surface-container-low': '#1C2026',
                'surface-container': '#22262E',
                'surface-container-high': '#292E37',
                'surface-container-highest': '#313742',
                'on-surface': '#F0F2F5',
                'on-surface-variant': '#9BA3AF',
                'inverse-surface': '#E3E5EB',
                'inverse-on-surface': '#191C21',
                outline: '#4E5564',
                'outline-variant': '#2C313A',
                'surface-tint': '#3B82F6',
                primary: '#3B82F6',
                'on-primary': '#ffffff',
                'primary-container': '#1D3B6F',
                'on-primary-container': '#BFDBFE',
                'inverse-primary': '#175EAD',
                secondary: '#8B95A5',
                'on-secondary': '#0F1115',
                'secondary-container': '#2B323D',
                'on-secondary-container': '#D1D5DB',
                tertiary: '#F97316',
                'on-tertiary': '#ffffff',
                'tertiary-container': '#7C2D12',
                'on-tertiary-container': '#FED7AA',
                error: '#EF4444',
                'on-error': '#ffffff',
                'error-container': '#451212',
                'on-error-container': '#FCA5A5',
                success: '#22C55E',
                'on-success': '#ffffff',
                'success-container': '#133820',
                'on-success-container': '#86EFAC',
                warning: '#EAB308',
                'on-warning': '#000000',
                'warning-container': '#422D05',
                'on-warning-container': '#FDE047',
                background: '#0F1115',
                'on-background': '#F0F2F5',
                'surface-variant': '#22262E'
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
            },
            borderRadius: {
                sm: '0.125rem',
                DEFAULT: '0.25rem',
                md: '0.375rem',
                lg: '0.5rem',
                xl: '0.75rem',
                full: '9999px'
            },
            spacing: {
                xs: '4px',
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '32px'
            }
        }
    },
    plugins: []
};
