import { Styles } from 'react-jss';
import { MediaQuery } from '../../theme/Breakpoints';

export type PhotosClasses =
    'Photos';

/**
 * The Styles for the Photos Component
 */
export const PhotosStyles: Styles<PhotosClasses> = {
    Photos: {
        width: '100%',
        alignSelf: 'center'
    }
};
