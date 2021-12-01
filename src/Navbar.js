import React from "react";

const Navbar = (props) => {
    
        return (
            <div style={styles.nav} >
                <div style={styles.cartIconContainer}>
                    <img   alt=" image"style ={styles.cartIcon}src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1638340983~hmac=5b7f3d1af85c7798398055915c37c0e9"/>
                    <span style={styles.cartCount}>{props.count}</span>
                  
                    
                </div>

            </div>
        );
    }



const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
export default Navbar;