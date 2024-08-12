import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      unit: 'em'
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter'
      }
    })
  ],
  transformers: []
})
