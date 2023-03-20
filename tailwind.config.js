/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["var(--font-montserrat)"],
                poppins: ["var(--font-poppins)"],
            },
            colors: {
                cl: {
                    primary: "#F4F6F0",
                    secondary: "#F4F6F0",
                    tertiary: "#F6F2F0",
                },
                black: {
                    dark: "#202020",
                    darkest: "#151515",
                    gray: "#333333",
                },
                grey: {
                    normal: "#565656",
                    dark: "#18191F",
                    lightest: "#E4E4E4",
                    light: "#F6F5F0",
                    light2: "#f0f1f6",
                    light3: "#E3E0D0",
                    blue: "#00A6FB",
                    bluish: "#1C2C40"
                },
                codelabs: {
                    primary1: "#8B00FF",
                    primary2: "#AE4DFF",
                    primary3: "#C680FF",
                    primary4: "#DDB3FF",
                    primary5: "#F4E6FF",
                    secondary1: "#F6FF81",
                    secondary2: "#F9FFA7",
                    secondary3: "#FBFFC0",
                    secondary4: "#FDFFDA",
                    secondary5: "#FFFFF3",
                    tertiary1: "#FE9DC5",
                    tertiary2: "#FFBBD7",
                    tertiary3: "#FFCEE2",
                    tertiary4: "#FFE2EE",
                    tertiary5: "#FFF6FA",
                    quaternary1: "#FC9360",
                    quaternary2: "#FDB490",
                    quaternary3: "#FEC9B0",
                    quaternary4: "#FFDFD0",
                    quaternary5: "#FFF5F0",
                    grey1: "#4C4B4C",
                    grey2: "#828283",
                    grey3: "#A6A6A6",
                    grey4: "#CACACA",
                    grey5: "#F0EEF3",
                    text: {
                        light: {
                            primary: "#262628",
                            secondary: "#4C4B4C",
                        },
                    },
                },
                blue: {
                    lightest: "#F0FAFF",
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}