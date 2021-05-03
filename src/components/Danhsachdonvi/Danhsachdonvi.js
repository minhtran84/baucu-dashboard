import React from 'react';

import styles from './Danhsachdonvi.module.css';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

const Danhsachdonvi = ( {data, handleDonviClick} ) => {

    return (
        <div className={styles.container}>
            <FormControl variant="outlined" className={styles.formControl}>
                <InputLabel htmlFor="outlined-donvibaucutinhs">Đơn vị bầu cử HĐND tỉnh</InputLabel>
                <NativeSelect onChange={ (e) => handleDonviClick(e.target.value) } 
                    inputProps={{name: '', id: 'outlined-donvibaucutinhs'}}>
                    {/* <option value="">Đơn vị bầu cử HĐND tỉnh</option> */}
                    <option aria-label="None" value="" />
                    {Object.entries(data).map( ([key, value]) => 
                        <option key={value.id} value={value.id}>{value.tenhuyen}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Danhsachdonvi;