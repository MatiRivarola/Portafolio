module.exports = {
  locales: ['en', 'es'], // Los idiomas que soportará tu aplicación
  defaultLocale: 'es', // El idioma predeterminado
  pages: {
    '*': ['common'],
    '/ruta-especifica': ['namespace-specifico']
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
};
