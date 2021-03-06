import React, {Component} from 'react';
import MenuCard from "./MenuCard";
import image1 from '../SlideShow/wokout.jpg'
import image2 from '../SlideShow/supp.jpg'
import image3 from '../SlideShow/equipment.jpg'


class MenuCardBar extends Component {

    render() {
        const tableStyles = {
            width: '80%',

        }

        const mCard1 = {
            width: '350px',
            image: image1,
            title: 'Workout',
            text: 'The Faculty of Computing of Sri Lanka Institute of Information technology is the epicenter of engineering education, research, knowledge creation and distribution in Sri Lanka.',
        }

        const mCard2 = {
            width: '350px',
            image: image2,
            title: 'Supplement',
            text: 'The Faculty of Business of Sri Lanka Institute of Information technology is the epicenter of engineering education, research, knowledge creation and distribution in Sri Lanka.'
        }

        const mCard3 = {
            width: '350px',
            image: image3,
            title: 'Equipment',
            text : 'The Faculty of Engineering of Sri Lanka Institute of Information technology is the epicenter of engineering education, research, knowledge creation and distribution in Sri Lanka'
        }

        return (
            <div align="center" style={{top: '-300px'}} >
                <table style={tableStyles} cellSpacing="20px" align="center">
                    <tbody>
                    <tr>
                        <td><MenuCard properties={mCard1}/></td>
                        <td><MenuCard properties={mCard2}/></td>
                        <td><MenuCard properties={mCard3}/></td>

                    </tr>
                    </tbody>
                </table>
            </div>
        )

    }
}


export default MenuCardBar;
