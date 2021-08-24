import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    title: {
        alignSelf: 'flex-start',
        padding: '50px '
    },
    btn: {
        textTransform: 'none',
        backgroundColor: theme.palette.success.dark,
        // margin: `0 ${pxToRem(150)} ${pxToRem(50)}`
    },
    uploadBtn: {
        textTransform: 'none',
        paddingRight:pxToRem(12),
        paddingLeft:pxToRem(12)
        // backgroundColor: theme.palette.primary.main,
    },
    label: {
        marginRight: pxToRem(30),
        marginLeft: pxToRem(30),
        paddingRight: pxToRem(10),
        paddingLeft: pxToRem(14)
    }
}));

export default useStyles;
