module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          isCustomElement: (tag) => tag.startsWith('ion-'), // Se você estiver usando elementos personalizados como ion-icon
        };
        return options;
      });
  },
};
