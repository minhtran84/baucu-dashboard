import React from 'react';

import styles from './Danhsachdonviqh.module.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Danhsachdonviqh = ( {data, handleDonviqhClick} ) => {

    return (
        // <ul>{Object.entries(data).map( ([key, value]) => (
        //         <li>
        //             <button onClick={ (e) => handleDonviqhClick(key) }>{value}</button>
        //         </li>
        //         ) ) 
        //     }
        // </ul>
        <div className={styles.container}>
            <ButtonGroup variant="text" color="primary" aria-label="contained primary button group">

                {Object.entries(data).map( ([key, value]) => (
                
                    <Button onClick={ (e) => handleDonviqhClick(key) }>{value}</Button>
                
                    ) ) 
                }
            </ButtonGroup>
        </div>
    )
}

export default Danhsachdonviqh;