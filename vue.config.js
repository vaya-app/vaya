module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        mac: {
          icon: './public/icons/icon.icns',
        },
      },
    },
  },
};
