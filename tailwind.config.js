const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    darkMode: 'class',
    important: true,
    theme: {
        screens: {
            xs: "540px",
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '12px',
                sm: '1rem',
                lg: '45px',
                xl: '5rem',
                '2xl': '13rem',
            },
            screens: {
                "2xl": "1400px",
            },
        },

        fontFamily: {
            'plusjakarta': ['"Plus Jakarta Sans", sans-serif'],
        },


        extend: {
            screens: {
                lg_992: '992px',
            },
            colors: {
                "primary-blue": "#0056A4",
                "primary-red": "#de2a32",
                "primary-yellow": "#d4ad3c",
                "primary-dark-yellow": "#CBA135",
                "primary-gray": "#7A7777",
                "primary-dark": '#252525',
                'dark': '#3c4858',
                'black': '#161c2d',
                'dark-footer': '#161c28',
                "primary-green": '#207990',
                "primary-lightGreen": "#31ddd1",
                
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
                },
            },

            boxShadow: {
                sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
                DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
                md: '0 5px 13px rgb(60 72 88 / 0.20)',
                lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
                xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
                '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
                inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
                testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
            },

            fontSize: {
                base: ['15px', '28px'],
                lg: ['17px', '28px'],
            },

            spacing: {
                0.75: '0.1875rem',
                3.25: '0.8125rem'
            },

            height: ({
                theme
            }) => ({
                '10.5': '2.625rem',
                '85': '21.25rem',
            }),
            width: ({
                theme
            }) => ({
                '10.5': '2.625rem',
            }),

            maxWidth: ({
                theme,
                breakpoints
            }) => ({
                '1200': '71.25rem',
                '992': '60rem',
                '768': '45rem',
            }),

            zIndex: {
                1: '1',
                2: '2',
                3: '3',
                999: '999',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "bg-img-main": "url('./banner-coming-soon.jpg')",
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms")({
          strategy: 'class', // only generate classes
        }),
        require("tailwindcss-animate"),
        require('@tailwindcss/aspect-ratio')
    ],
}
