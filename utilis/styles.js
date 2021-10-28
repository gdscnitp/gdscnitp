import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor : 'white',
        '& a':{
            color: '#676C72',
            textAlign: 'center',
            padding:'10',

        }

    },
    imgLogo: {
        padding: '10'
    }
})

export default useStyles;