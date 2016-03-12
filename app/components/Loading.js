var React = require('react')
var styles = require('../styles')

var Loading = React.createClass({
  render: function(){
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
})


module.exports = Loading
