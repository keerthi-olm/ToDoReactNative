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
            <TextInput ref={(ref) => this.newItem = ref} placeholder="Add a new task..."/>
           </View>
           <View className="button add" style={{'flex':1}}>
            <TouchableOpacity onPress={this._handleAddItem} title='Add' style={styles.button}><Text style={styles.textBt} >Add </Text></TouchableOpacity>
           </View>
           <View className="button reset" style={{'flex':1}}>
            
                        <TouchableOpacity onPress={this._handleResetList} title='Reset' style={styles.button}><Text  style={styles.textBt}>Reset </Text></TouchableOpacity>
 
           </View>
            {this.state.list.map((value, i) => {
            return <ToDoList key={i}  item={value} removeItem={this._handleUpdateDoneList}/>;
          })}       
          <View className="footer" style={{ "flexBasis": 250}}>

                        <TouchableOpacity onPress={this._handleAddItem} title='Remove' style={styles.button}><Text  style={styles.textBt}>Remove </Text></TouchableOpacity>
 
        </View>
        </View>
      </View>
    );
  }
   _handleAddItem = () => {
    let newItem =this.newItem._lastNativeText;
       if (newItem!=='') {
        this.setState({ list: [...this.state.list, newItem] });

        // this.doneList[this.state.list.length]=false;
        console.log(this.doneList);

        console.log("\n ***Add Button Pressed... **");
        console.log(
          "Add handler will pull value from the input field and set the new state for ToDO app"
        );
        console.log(
          "Tip : You can use React.createRef() to reference Virtual DOM elements.  ");
     }
   

  };

     _handleResetList = () => {
    //  let newItem =this.refs.newItem.value;
    console.log("\n ***Reset Button Pressed... **");
    console.log(
      "Reset handler will reset list to default values..." +
        JSON.stringify(ToDoApp.defaultProps.list)
    );

    this.setState({ list: [...ToDoApp.defaultProps.list] });
  };

    _handleUpdateDoneList = id => {


      let checkIfInDoneList = this.doneList.filter(function (val) {
          return (val === id);
      });

      if (checkIfInDoneList===undefined || checkIfInDoneList.length===0) {
      // add to list
      this.doneList.push(id);
      } else {
      //delete from list
      this.doneList= this.doneList.filter(function (val) {
          return (val !== id);
      });
      }
           console.log('donelist afterremove-->');
           console.log(this.doneList);

  };
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
   componentWillReceiveProps(nextProps) {
    if (nextProps.item !== this.props.item)
      this.setState({ ...this.state, value: nextProps.item , checked:false});
    console.log(
      'ToDoList -> componentWillReceiveProps : detected property change..."' +
        nextProps.item +
        "--" +
        this.props.item
    );
  }
  _handleCheckBoxClick = (e) => {
    this.setState({
      checked: !this.state.checked
    });
   this.props.removeItem(e.target.id);
  }

  render() {
    /** RENDER  **/
    console.log("-- render");
    
    let text = this.state.checked ? <Text>{this.state.value}</Text> : this.state.value;
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
        "paddingTop": 30,

  }, 
  "widgetUl": {
    "padding": 0,
    "margin": 0,
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
