import DarkTheme from './DarkTheme';
import LightTheme from './LightTheme';
import PrimaryTheme from './PrimaryTheme';

export { default as DarkTheme } from './DarkTheme';
export { default as LightTheme } from './LightTheme';
export { default as PrimaryTheme } from './PrimaryTheme';
export * as table  from './Table';

const ArrThemes = [
    {
        value: 1,
        name: 'Default Theme',
        Theme: PrimaryTheme,
    },
    {
        value: 2,
        name: 'Light Theme',
        Theme: LightTheme,
    },
    {
        value: 3,
        name: 'Dark Theme',
        Theme: DarkTheme,
    },
]

export default ArrThemes;