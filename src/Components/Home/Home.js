import React from 'react';
import SnackPantry from '../../Pictures/Snack-Logo.jpeg';
import PantryImg from '../../Pictures/pantry4.jpg';
import Shop from '../Shop/Shop';

export default class Home extends React.Component {
    constructor(){
        super();
    
        this.state={
          imgStyle: {
            backgroundImage: 'url('+SnackPantry+')'
          }
        }
    
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(event) {
        // console.log(this.state.imgStyle.backgroundImage)
        if(this.state.imgStyle.backgroundImage === 'url('+SnackPantry+')'){
          this.setState({
            imgStyle:{
              backgroundImage: 'url('+PantryImg+')'
            }
          })
        }else{
          this.setState({
            imgStyle:{
              backgroundImage: 'url('+SnackPantry+')'
            }
          })
        }
      }

    render() {
        return(
          <div>
            <div className="Body-text">
    
              <div className="left-image-text">
                <h1>What is Snack Pantry?</h1>
                <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</h3>
              </div>
              <img className="Pantry" onClick={this.handleClick} style={this.state.imgStyle} />
              <div className="right-image-text">
                <h1>How You Can Help!</h1>
                <h3>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</h3>
              </div>
            </div>

          </div>
        );
    }
}