module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        default: 'var(--ion-color-primary)',
        shade: 'var(--ion-color-primary-shade)',
        tint: 'var(--ion-color-primary-tint)'
      },
      secondary: {
        default: 'var(--ion-color-secondary)',
        shade: 'var(--ion-color-secondary-shade)',
        tint: 'var(--ion-color-secondary-tint)'
      },
      sapphire: {
        default: 'var(--ion-color-sapphire)',
        shade: 'var(--ion-color-sapphire-shade)',
        tint: 'var(--ion-color-sapphire-tint)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
