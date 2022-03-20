module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./views/**/*.{js,ts,jsx,tsx}"],
    // darkMode: false, // or 'media' or 'class'

    theme: {
        screens: {
            // 'desktop': '840px',
            // => @media (min-width: 640px) { ... }
        },

        container: {
            center: true,
        },

        extend: {},

        fontSize: {
            1: "36.0px", //26.0px
            2: "34.0px", //26.0px
            3: "32.0px", //26.0px
            4: "30.0px", //26.0px
            5: "28.0px", //26.0px
            6: "26.0px", //26.0px
            7: "24.0px", //24.0px
            8: "21.0px", //21.1px
            9: "20.0px", //19.5px
            10: "18.0px", //19.5px
            11: "16.0px", //16.0px  font title
            12: "15.0px", //16.0px  font title
            13: "14.0px", //14.6px
            15: "13.0px", //13.0px  font tex
            15: "11.0px", //11.0px  font tex
            16: "9.0px", // 9.7px
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
