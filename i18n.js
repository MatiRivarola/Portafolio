module.exports = {
  locales: ['en', 'es'], // Los idiomas que soportará tu aplicación
  defaultLocale: 'es', // El idioma predeterminado
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./src/app/locales/${lang}/${ns}.json`).then((m) => m.default),
};
