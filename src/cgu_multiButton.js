import React from 'react';
class CounterButton extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        counter: 0
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
      this.setState({ counter: this.state.counter+1 });
      console.log(this.state);
    }
    render() {
        var text = this.state.counter;
        return (
        <button onClick={this.handleClick}>你點了第{this.props.NO}個按鈕{text}次.</button>
        );
      }
    }
    
const multiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i)
        output.push(<CounterButton NO ={i}></CounterButton>)
    return output;
}
    
export default multiButton;