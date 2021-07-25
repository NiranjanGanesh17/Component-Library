import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const NTextFieldStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper:{
            width:'76%'
        },
        menuItemList: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
        },

        label:{
            width:'24%',
           backgroundColor:theme.palette.primary.main,
            height:'56px',
            color:'#ffffff',
            overflow:'hidden',
            whiteSpace:'nowrap',
            textOverflow:'ellipsis',
            borderTopLeftRadius:'4px',
            borderBottomLeftRadius:'4px',
            display:'flex',
            fontFamily:theme.typography.fontFamily ,
            alignItems:'center',
            justifyContent:'center'
        },
        wholeWrapper:{
            width:'400px',
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
        }
    }))