export default  {
    googleSignInBtn: {
      background: 'white',
      borderRadius: 3,
      border: 0,
      height: 50,
      width: 300,
      padding: '0 30px',
      boxShadow: '0 1px 3px -1px #333',
      margin: '10px 0 40px 0'
    },

    welcomeText: {
        marginBottom: '30px'
    },

    avatar: {
        marginRight: '20px'
    },

    googleText: {
        textTransform: 'capitalize'
    },
    orText: {
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: 120,
            height: 1,
            backgroundColor: 'rgba(163, 162, 162, 0.5)',
            marginRight: 20
            
          },
        
          '&::after': {
            content: '""',
            display: 'inline-block',
            width: 120,
            height: 1,
            backgroundColor: 'rgba(163, 162, 162, 0.5)',
            marginLeft: 20
            
          }

    },

    textfield: {
        
        width: 300,
        height: '50%',
        marginBottom: 20,

        '&:first-child': {
            marginTop: 30
        }
    },

    loginBtn:{
        marginRight: 90 
    },

    anchor:{
        textDecoration: 'none'
    },

    errorDiv:{
        color: 'red',
        marginBottom: 15
    }
  };