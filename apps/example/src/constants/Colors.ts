import colors from 'tailwindcss/colors';

export default {
  light: {
    // react-navigation defaults
    primary: colors.neutral[900], // rgb(15, 23, 42)
    background: colors.white, //rgb(255, 255, 255)
    card: 'rgb(253, 253, 253)',
    text: colors.neutral[800], //rgb(36, 42, 49)
    border: colors.neutral[500], //rbg(229, 231, 235)
    notification: colors.neutral[700], //rgb(107, 114, 128)
  },
  dark: {
    // react-navigation defaults
    primary: colors.neutral[100], // rgb(15, 23, 42)
    background: colors.black, // rgb(255, 255, 255)
    card: colors.neutral[950], // rgb(249, 250, 251)
    text: colors.neutral[300], // rgb(36, 42, 49)
    border: colors.neutral[500], // rbg(229, 231, 235)
    notification: colors.neutral[700], // rgb(107, 114, 128)
  },
};
