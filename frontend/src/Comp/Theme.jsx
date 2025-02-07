// // theme.js
// import { extendTheme } from "@chakra-ui/react";
// // import { extendTheme } from "@chakra-ui/theme-utils";


// const customTheme = extendTheme({
//   config: {
//     initialColorMode: "light", // Default mode
//     useSystemColorMode: false,
//   },
//   styles: {
//     global: (props) => ({
//       body: {
//         bg: props.colorMode === "light" ? "#f8f9fa" : "#1a202c", // Custom background
//         color: props.colorMode === "light" ? "#2d3748" : "#f8f9fa", // Custom text color
//       },
//     }),
//   },
//   colors: {
//     light: {
//       navbarBg: "rgba(255, 255, 255, 0.9)", // Light mode navbar background
//       text: "#2d3748", // Light mode text color
//       buttonBg: "#3182ce", // Light mode button color
//     },
//     dark: {
//       navbarBg: "rgba(26, 32, 44, 0.9)", // Dark mode navbar background
//       text: "#f8f9fa", // Dark mode text color
//       buttonBg: "#f6ad55", // Dark mode button color
//     },
//   },
// });

// export default customTheme;