import {
    Platform
} from 'react-native';

import DeviceInfo from 'react-native-device-info';

let type;

export const isTablet = () => {
    console.log("CALLED TABLET CHECK");
    if(Platform.OS === 'windows'){
        type = true;
    }
    else{
        if(DeviceInfo.isTablet()){
            console.log("TABLET");
            type = true;
        }
        else{
           console.log("NON TABLET");
            type = false;
        }
    }
    return type;
};
