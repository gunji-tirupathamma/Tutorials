const Box = props => {
  //  Write your code here.
  const{messageText,className}=props
 
<div className={className}>
      <h1 className="message">{messageText}</h1>
  </div>

}

const element = (
  //  Write your code here. 
  <div className="bg-container">
      <h1 className="heading">Boxes</h1>
      <div>
          <Box messageText="Small",className="small-box"/>
          <Box messageText="Medium",className="medium-box"/>
          <Box messageText="Large",,className="large-box"/>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
