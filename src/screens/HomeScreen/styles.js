import { StyleSheet} from 'react-native';
import values from '../../constants/values';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: values.verticalPadding + 40,
        backgroundColor: colors.background
    },
    horizontalPaddingView: {
        paddingHorizontal: values.horizontalPadding,
    }
})
export default styles;