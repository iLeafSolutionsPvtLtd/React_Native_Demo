import styles_mobile from './styles_mobile';
import styles_tab from './styles_tab';
import { isTablet } from '../../lib/DeviceType';
let styles=styles_mobile;
{/**if(isTablet()){
    styles = styles_tab;
}
else{
    styles = styles_mobile;
}**/}
export default styles;
