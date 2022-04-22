import { createTheme } from '@mui/material/styles';

// assets
import colors from 'assets/scss/_themes-vars-dark.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
    const color = colors;
    const themeOption = {
        colors: color,
        heading: color.grey50,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.grey900,
        darkTextPrimary: color.grey100,
        darkTextSecondary: color.grey300,
        textDark: color.grey400,
        menuSelected: color.grey900,
        menuSelectedBack: color.grey200,
        divider: color.grey200,
        customization
    };

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
};

export default theme;
