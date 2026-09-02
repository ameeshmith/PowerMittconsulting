/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false, // Disable Tailwind's default container to use custom polished container
  },
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040A12',
          900: '#0B192C',
          850: '#0E213A',
          800: '#112948',
          700: '#183B68',
          600: '#235391',
          100: '#E2E8F0',
          50: '#F8FAFC',
        },
        powerblue: {
          900: '#003A70',
          800: '#004F9E',
          700: '#005ECC',
          600: '#0066FF',
          500: '#1A75FF',
          400: '#4D94FF',
          300: '#80B3FF',
          100: '#E6F0FF',
          50: '#F0F6FF',
        },
        forest: {
          950: '#0B1610',
          900: '#13261C',
          850: '#162D24',
          800: '#1B3327',
          700: '#234433',
          600: '#2F5743',
          500: '#3D6C54',
          100: '#E6EFE9',
          50: '#F2F7F4',
        },
        bronze: {
          900: '#4E2E16',
          700: '#7B4C27',
          600: '#8C5E3C',
          500: '#9E6D47',
          100: '#F3E5D9',
          50: '#FAF5F0',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Be Vietnam Pro"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', 'monospace'],
      },
      borderRadius: {
        'lg': '10px',
        'xl': '14px',
        '2xl': '18px',
        '3xl': '24px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 16px 36px -4px rgba(0, 102, 255, 0.12), 0 6px 16px -2px rgba(15, 23, 42, 0.06)',
      }
    },
  },
  plugins: [],
}
