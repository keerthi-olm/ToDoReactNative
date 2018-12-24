import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View ,Button,TextInput,CheckBox} from 'react-native';

export default class ToDoApp extends React.Component {

    constructor(props) {
    super();
    this.state = { list: props.list, doneList:props.doneList };
    this.doneList=[...props.doneList];
    this.list=[...this.state.list];


  }


  render() {
    return (
       <View style={styles.App}>
        <View id="list" style={styles.widgetUl} >
          <View className="header" style={styles.header} >
            <Text lassName='title' >My to do list </Text>
           </View>
           <View className="add_reset_section">
            <TextInput placeholder="Add a new task..."/>
           </View>
           <View className="button add">
            <Button onClick={this._handleAddItem} title='press' >Add</Button>
           </View>
           <View className="button reset">
            <Button onClick={this._handleResetList} title='press'/>
           </View>
            {this.state.list.map((value, i) => {
            return <ToDoList key={i}  item={value} />;
          })}       
          <View className="footer"><Button className='remove'  onClick={this._handleRemoveDoneItems}  title='press' >
          Remove
        </Button></View>
        </View>
      </View>
    );
  }
}
ToDoApp.propTypes = {
  list: PropTypes.array
};

ToDoApp.defaultProps = {
  list: ["Get up in the morning", "Brush my teeth"],
  doneList: []
};

class ToDoList extends React.Component {
  constructor(props) {
    super();
     this.state = { value: props.item , checked:false};
   
  }
  componentWillReceiveProps(nextProps) {
    
  }
  _handleCheckBoxClick = (e) => {
    
  }

  render() {
    /** RENDER  **/
    console.log("-- render");
    
    let text = this.state.checked ? <strike>{this.state.value}</strike> : this.state.value;
    let checked= this.state.checked ? 'checked' : '';
    return (
      <View className="main" style={styles.main}>
        <CheckBox  onChange={this._handleCheckBoxClick}  /><Text>{text}</Text>
      </View>
    );
  }

  componentWillUnmount() {

  }
}
const styles = StyleSheet.create({
  "App": {
    "fontFamily": "sans-serif",
    "textAlign": "center",
    "fontSize": 52
  }, 
  "widgetUl": {
    "padding": 0,
    "margin": 0,
    "height": 200,
    "display": "flex",
    "justifyContent": "space-around",
    flexDirection:'row',
    flexWrap:'wrap',
    "alignItems": "stretch"
  }, 
  "header": {
    "flexBasis": 1,
    "flexGrow":1
  },
  "footer": {
    "flexBasis": 0.9,
     "flexGrow":1
  },
  "main": {
    "flex": 1
    , "flexGrow":1
  },
});
