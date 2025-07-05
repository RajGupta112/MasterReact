import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
   this.state={
    count:0
   }
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.address}</h2>
        <h3>{this.state.count}</h3>
        <button  onClick={()=>{
          this.setState(
            {
              count:this.state.count+1,
            }
          )
        }}>
          increament
        </button>
      </div>
    );
  }
}

export default ProfileClass;
