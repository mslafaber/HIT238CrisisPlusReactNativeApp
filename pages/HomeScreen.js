import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';

export default class HomeScreen extends React.Component
{
  constructor(){
    super();
    this.state = {
      query : null,
      dataSource: [],
      dataBackup: []
    };
  }

  componentDidMount() {
    var data = [
      { title: 'Life Threatening Emergency Contact', description: 'Contact when a person is seriously injured and need Police, Fire or Medical emergency service or when a property is threatened', image: require("../assets/triple-zero.jpg"), screendetailTitle: 'Police, Fire or Medical Life Threatening Emergency', callTitle: 'Call 000'},
      { title: 'Poison Emergency Contact', description: 'Contact when a person has taken an overdose, made an error with medicine or been poisoned', screendetailTitle: 'Poisons Emergency', image: require("../assets/poison.png"), callTitle: 'Call 24/7 Poisons Contact' },
      { title: 'Unsure Medical Emergency or Medical Assistance Contact', description: 'Contact to speak to a registered nurse about a medical concern but not an emergency for an ambulance', screendetailTitle: 'Medical assistance from a Registeres Nurse', image: require("../assets/health-direct.jpg"), callTitle: 'Call 24/7 Medical Assistance Contact' },
      { title: 'Natural Disaster Emergency Contact', description: 'Contact when affected by a natural disaster (flodds, bushfire..) to get assistance', screendetailTitle: 'Natural Disaster Emergency Contact', image: require("../assets/floods.jpg"), callTitle: 'Call 24/7 Disaster Assistance Contact' },
      { title: 'Crime Reporting Emergency Contact', description: 'Contact if you witness suspicious or criminal activity, recognised a person/vehicle of interest to the police or overheard suspicious conversation for criminal activities', screendetailTitle: 'Crime Reporting Emergency Contact', image: require("../assets/crime-report.png"), callTitle: 'Call Crime Stoppers' },
      { title: 'Go to Mental Health Emergency Contact', description: 'Contact when feeling overwhelmed, having difficulty coping or staying safe or to prevent a suicidal situation', screendetailTitle: 'Mental Health Emergency Contact', image: require("../assets/mental-health.png"), callTitle: 'Call Mental Health Helpline' },
    ];

    this.setState({
      dataBackup : data,
      dataSource : data
    })
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query : query
    });
    if (query == ""){
      this.setState({
        dataSource : this.state.dataBackup
      })
    }
    else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter(l =>
        l.description.toLowerCase().match(query));

        this.setState({
          dataSource: data,
        });
    }
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    )
  }

  render()
  {
    const { navigate } = this.props.navigation;
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
          <View style={styles.buttonsection}>
            <TextInput 
              style={styles.textinputstyle}
              placeholder = "Enter Key Word"
              placeholderTextColor = "grey"
              value = {this.state.query}
              onChange = {this.filterItem.bind(this)}
            />
            <FlatList 
              data = {this.state.dataSource}
              ItemSeparatorComponent={() => this.renderSeparator()}
              renderItem = {({item,index}) => {
                return (
                  <View>
                    <TouchableOpacity 
                      style={styles.buttonstyle}
                      activeOpacity={0.4}
                      onPress={() => this.props.navigation.navigate('EmergencyDetails', {item: item, index: index })}
                    >
                      <Text style={styles.buttonTextStyle}>{item.title}</Text>
                      <Text style={styles.buttonsubTextStyle}>{item.description}</Text>
                      <Image source={item.image} style={styles.buttonImageIconStyle}/>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </View>
      </View>
    );
  }
}

/* const emergsArray = [
    { title: 'Life Threatening Emergency Contact', id: '1', description: 'Contact when a person is seriously injured and need Police, Fire or Medical emergency service or when a property is threatened', image: require("../assets/triple-zero.jpg"), screendetailTitle: 'Police, Fire or Medical Life Threatening Emergency', callTitle: 'Call 000', androidnum: 'tel:000', iOSnum: 'telprompt:${000}' },
    { title: 'Poison Emergency Contact', id: '2', description: 'Contact when a person has taken an overdose, made an error with medicine or been poisoned', screendetailTitle: 'Poisons Emergency', image: require("../assets/poison.png"), callTitle: 'Call 24/7 Poisons Contact', androidnum: 'tel:131126', iOSnum: 'telprompt:${131126}' },
    { title: 'Unsure Medical Emergency or Medical Assistance Contact', id: '3', description: 'Contact to speak to a registered nurse about a medical concern but not an emergency for an ambulance', screendetailTitle: 'Medical assistance from a Registeres Nurse', image: require("../assets/health-direct.jpg"), callTitle: 'Call 24/7 Medical Assistance Contact', androidnum: 'tel:1800022222', iOSnum: 'telprompt:${1800022222}' },
    { title: 'Natural Disaster Emergency Contact', id: '4', description: 'Contact when affected by a natural disaster (flodds, bushfire..) to get assistance', screendetailTitle: 'Natural Disaster Emergency Contact', image: require("../assets/floods.jpg"), callTitle: 'Call 24/7 Disaster Assistance Contact', androidnum: 'tel:1802266', iOSnum: 'telprompt:${1802266}' },
    { title: 'Crime Reporting Emergency Contact', id: '5', description: 'Contact if you witness suspicious or criminal activity, recognised a person/vehicle of interest to the police or overheard suspicious conversation for criminal activities', screendetailTitle: 'Crime Reporting Emergency Contact', image: require("../assets/crime-report.png"), callTitle: 'Call Crime Stoppers', androidnum: 'tel:1800333000', iOSnum: 'telprompt:${1800333000}' },
    { title: 'Go to Mental Health Emergency Contact', id: '6', description: 'Contact when feeling overwhelmed, having difficulty coping or staying safe or to prevent a suicidal situation', screendetailTitle: 'Mental Health Emergency Contact', image: require("../assets/mental-health.png"), callTitle: 'Call Mental Health Helpline', androidnum: 'tel:131114', iOSnum: 'telprompt:${131114}' },
  ]; */

/* export default class HomeScreen extends React.Component {
 
    construstor(props) {
      this.state = {
        emergsArray: [
          { title: 'Life Threatening Emergency Contact', id: '1', description: 'Contact when a person is seriously injured and need Police, Fire or Medical emergency service or when a property is threatened', image: require("../assets/triple-zero.jpg"), screendetailTitle: 'Police, Fire or Medical Life Threatening Emergency', callTitle: 'Call 000', androidnum: 'tel:000', iOSnum: 'telprompt:${000}' },
          { title: 'Poison Emergency Contact', id: '2', description: 'Contact when a person has taken an overdose, made an error with medicine or been poisoned', screendetailTitle: 'Poisons Emergency', image: require("../assets/poison.png"), callTitle: 'Call 24/7 Poisons Contact', androidnum: 'tel:131126', iOSnum: 'telprompt:${131126}' },
          { title: 'Unsure Medical Emergency or Medical Assistance Contact', id: '3', description: 'Contact to speak to a registered nurse about a medical concern but not an emergency for an ambulance', screendetailTitle: 'Medical assistance from a Registeres Nurse', image: require("../assets/health-direct.jpg"), callTitle: 'Call 24/7 Medical Assistance Contact', androidnum: 'tel:1800022222', iOSnum: 'telprompt:${1800022222}' },
          { title: 'Natural Disaster Emergency Contact', id: '4', description: 'Contact when affected by a natural disaster (flodds, bushfire..) to get assistance', screendetailTitle: 'Natural Disaster Emergency Contact', image: require("../assets/floods.jpg"), callTitle: 'Call 24/7 Disaster Assistance Contact', androidnum: 'tel:1802266', iOSnum: 'telprompt:${1802266}' },
          { title: 'Crime Reporting Emergency Contact', id: '5', description: 'Contact if you witness suspicious or criminal activity, recognised a person/vehicle of interest to the police or overheard suspicious conversation for criminal activities', screendetailTitle: 'Crime Reporting Emergency Contact', image: require("../assets/crime-report.png"), callTitle: 'Call Crime Stoppers', androidnum: 'tel:1800333000', iOSnum: 'telprompt:${1800333000}' },
          { title: 'Go to Mental Health Emergency Contact', id: '6', description: 'Contact when feeling overwhelmed, having difficulty coping or staying safe or to prevent a suicidal situation', screendetailTitle: 'Mental Health Emergency Contact', image: require("../assets/mental-health.png"), callTitle: 'Call Mental Health Helpline', androidnum: 'tel:131114', iOSnum: 'telprompt:${131114}' },
        ],
      };
    }
  
    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#CED0CE',
          }}
        />
      );
    };
  
    searchItems = text => {
      let newData = this.arrayNew.filter(item => {
        const itemData = `${item.title.toUpperCase()}`;
        const textData = text.toUpperCase();
        if(text.length >0 ){
          return itemData.indexOf(textData) > -1;
        }
      });
      this.setState({
        data: newData,
        value: text,
      });
    };
  
    renderHeader = () => {
      return (
        <TextInput
          style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
          placeholder="Type Name..."
          onChangeText={text => this.searchItems(text)}
        />
      );
    };
  
    _onPressItem = () => { 
       navigation.push('EmergencyDetails', emergsArray)
    };
  
    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={styles.container}>
          <View style={styles.buttonsection}>
          <FlatList 
            data={emergsArray}
            renderItem={({ item }) => (
              <TouchableOpacity 
              style={styles.buttonstyle}
              activeOpacity={0.4}
              onPress={() => this.props.navigation.navigate('EmergencyDetails')}
            >
              <Text style={styles.buttonTextStyle}>{item.title}</Text>
              <Text style={styles.buttonsubTextStyle}>{item.description}</Text>
              <Image source={item.image} style={styles.buttonImageIconStyle}/>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.title}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
          </View>
        </View>
      );
    }
  } */

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'center',
      marginHorizontal: 3,
    },
    buttonsection: {
      marginTop: 1,
    },
    textinputstyle: {
      height: 60,
      width: '100%',
      backgroundColor: '#e2cebd',
      borderRadius: 20,
      padding: 5,
      paddingLeft: 20,
      fontSize: 20
    },
    buttonstyle: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: '#F5FFFA',
      borderRadius: 15,
      padding: 0,
      marginBottom: 5,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.4,
    },
    buttonTextStyle: {
      fontSize: 18,
      marginTop: 15,
      marginBottom: 4,
      marginLeft: 10,
      fontWeight: "bold",
      textAlign: "center"
    },
    buttonsubTextStyle: {
      fontSize: 14,
      marginTop: 5,
      marginBottom: 4,
      marginLeft: 10,
      textAlign: "center"
    },
    buttonImageIconStyle: {
      padding: 5,
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 20,
      height: 150,
      width: 350,
      resizeMode: 'stretch',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  