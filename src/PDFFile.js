import React, { Component } from 'react';
import {Document,Page,View,Text,Image,StyleSheet,Svg,Line,Font} from '@react-pdf/renderer';
import Capture from './Capture.PNG'
import Dog from './Dog.jpg';
class PDFFile extends Component {
    render() {
        return (
        <Document style={styles.document}>
            <Page key={this.props.name} size="A4" style={styles.page}>
                <View style={styles.view} >
                    <Image src={Capture} style={styles.image}/>
                    <Image src={this.props.qr} style={styles.image}/>
                </View>
        <Svg height="10" width="550">
        <Line
          x1="0"
          y1="0"
          x2="550"
          y2="0"
          strokeWidth={2}
          stroke="rgb(0,0,0)"
        />
        </Svg>
        <View style={styles.view1}>
          <View style={styles.view2}>
              <View style={styles.view1}>
                <Text style={styles.Name}>Name: </Text>
                <Text style={styles.NormalName}>{this.props.name} </Text>
              </View>
              <View style={styles.view1}>
                <Text style={styles.Name}>MR#: </Text>
                <Text style={styles.NormalName}>{this.props.mr} </Text>
              </View>
              <View style={styles.view1}>
                <Text style={styles.Name}>Phone: </Text>
                <Text style={styles.NormalName}>{this.props.phone}</Text>
              </View>
              <View style={styles.view1}>
                <Text style={styles.Name}>Age/Gender: </Text>
                <Text style={styles.NormalName}>{this.props.age} </Text>
              </View>
          </View>
          <View style={styles.view3}>
              <View style={styles.view1}>
                <Text style={styles.Name}>Date: </Text>
                <Text style={styles.NormalName}>{this.props.date} </Text>
              </View>
              <View style={styles.view1}>
                <Text style={styles.Name}>Lab #: </Text>
                <Text style={styles.NormalName}>{this.props.lab} </Text>
              </View>
              <View style={styles.view1}>
                <Text style={styles.Name}>Report Date: </Text>
                <Text style={styles.NormalName}>{this.props.reportdate} </Text>
              </View>
          </View>
          </View>
      <Svg height="10" width="550">
        <Line
          x1="0"
          y1="0"
          x2="550"
          y2="0"
          strokeWidth={2}
          stroke="rgb(0,0,0)"
        />
      </Svg>
                <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
                {/* <Image allowDangerousPaths src={{uri:""}}/> */}
            </Page>
        </Document>    
            
        );
    }
}
const styles=StyleSheet.create({
    document:{
        margin:4,
        backgroundColor:"gray"
    },
    page:{
        marginTop:10,
        marginLeft:30
    },
    Name:{
        fontWeight:"bold",
        fontSize:12,
    },
    NormalName:{
        fontSize:10,
        marginTop:1,
        marginRight:45
    },
    view:{
        display:"flex",
        flexDirection:"row",
    },
    view1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    view2:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
    },
    view3:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        marginRight:30
    },
    text:{
        textAlign:'justify',
        padding:100
    },
    image:{
        width:"70%",
        height:90,
        
    },
    image1:{
        width:100,
        height:90,
    }
})

export default PDFFile; 