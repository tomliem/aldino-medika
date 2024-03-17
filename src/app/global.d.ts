// Augment the palette to include a violet color
declare global {

    declare module '@mui/material/styles' {
        interface Palette {
          aldinoGreen: Palette['primary'];
        }
      
        interface PaletteOptions {
          aldinoGreen?: PaletteOptions['primary'];
        }
    }
    declare module '@mui/material/Button' {
        interface ButtonPropsColorOverrides {
            aldinoGreen: true;
        }
    }
}