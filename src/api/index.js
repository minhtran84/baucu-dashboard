import axios from 'axios';

//BAUCU SECTION START FROM HERE

//const baucu_api = 'http://baucu.soctrang.gov.vn'; //192.168.7.133

const baucu_api = 'http://baucu2021.soctrang.gov.vn'; //new app on 192.168.13.121

//get Danh sach donvibaucutinhs
export const fetchdsDonvibaucutinh = async () => {

    let url = `${baucu_api}/donvibaucutinhs`;

    // let url = '/donvibaucutinhs';

    try {
        const { data } = await axios.get(url); //donvibaucutinhs function must be defined on Laravel Route && Controller

        return data; //this will return Array
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchdsDonvibaucuqh = async () => {
    
    let url = `${baucu_api}/donvibaucuqhs`;

    //let url = '/donvibaucuqhs';

    try {
        const { data } = await axios.get(url); 

        return data; 
    }
    catch (error) {
        console.log(error);
    }
}

//get So phieu bau cua cac Dai bieu tinh theo donvi
export const fetchSolieutheodonvi = async (donvi) => {

    let url = '';

    if (donvi) {
        url = `${baucu_api}/solieubautheodonvi/${donvi}`
    }
    else
        url = `${baucu_api}/solieubautheodonvi/1`

    try {
        const { data } = await axios.get(url);

        //console.log(data);

        return data; //this will return Array [ {"sophieu":"64563", "hoten":"Nguyen Trung Hieu"}, {...} ]
    }
    catch (error) {
        console.log(error);
    }
}

//get So phieu bau cua cac Dai bieu tinh theo donvi
export const fetchSolieutheodonviqh = async (donvi) => {

    let url = '';
    
    if (donvi) {
        url = `${baucu_api}/solieubautheodonviqh/${donvi}`
    }
    else
        url = `${baucu_api}/solieubautheodonviqh/1`

    try {
        const { data } = await axios.get(url);

        //console.log(data);

        return data; //this will return Array [ {"sophieu":"64563", "hoten":"Nguyen Trung Hieu"}, {...} ]
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchTiendotinh = async () => {

    let url = `${baucu_api}/tiendotinh`;

    try {
        const { data } = await axios.get(url); 

        console.log(data);

        return data; //
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchTiendoqh = async () => {

    let url = `${baucu_api}/tiendoqh`;

    try {
        const { data } = await axios.get(url); 

        console.log(data);

        return data; //
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchTiendohuyen = async () => {

    let url = `${baucu_api}/tiendohuyen`;

    try {
        const { data } = await axios.get(url); 

        console.log(data);

        return data; //
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchTiendoxa = async () => {

    let url = `${baucu_api}/tiendoxa`;

    try {
        const { data } = await axios.get(url); 

        console.log(data);

        return data; //
    }
    catch (error) {
        console.log(error);
    }
}