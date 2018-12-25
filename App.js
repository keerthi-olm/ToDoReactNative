import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View ,Button,TextInput,CheckBox,TouchableOpacity} from 'react-native';

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
          <View style={styles.header} >
            <Text lassName='title' >My to do list </Text>
           </View>
           <View className="add_reset_section" style={styles.addResetSection}>
            <TextInput placeholder="Add a new task..."/>
           </View>
           <View className="button add" style={{'flex':1}}>
            <TouchableOpacity onClick={this._handleAddItem} title='Add' style={styles.button}><Text style={styles.textBt} >Add </Text></TouchableOpacity>
           </View>
           <View className="button reset" style={{'flex':1}}>
            
                        <TouchableOpacity onClick={this._handleAddItem} title='Reset' style={styles.button}><Text  style={styles.textBt}>Reset </Text></TouchableOpacity>
 
           </View>
            {this.state.list.map((value, i) => {
            return <ToDoList key={i}  item={value} />;
          })}       
          <View className="footer" style={{ "flexBasis": 250}}><Button style={styles.button} className='remove'  onClick={this._handleRemoveDoneItems}  title='press' >
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
      <View className="main" style={styles.main} style={{'flex':11, "flexBasis": 250 ,'flexDirection':'row'}}>
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
    "fontSize": 52,
    'flexBasis':250,
        "paddingTop": 30,

  }, 
  "widgetUl": {
    "padding": 0,
    "margin": 0,
    "height": 200,
    "display": "flex",
    "justifyContent": "space-around",
    flexDirection:'row',
    flexWrap:'wrap',
    "alignItems": "stretch",
    alignItems: 'center'
  }, 
  "header": {
    "flexBasis": 250,
    "flex":1,
    "backgroundColor": '#2ec76e',
    padding: 10,
  },
  "footer": {
    "flexBasis": 250,
     "flex":1
  },
  "main": {
    "flex": 1,
    "flexBasis":250,
     'padding': 10,

    
  },
  "addResetSection": {
   "flexBasis":200,
},
"textBt": {
   "color":"#fff"
},
  button: {
    'alignItems': 'center',
    'backgroundColor': '#f44336',
   'padding': 10,
   'marginRight':5
    
  }
});
