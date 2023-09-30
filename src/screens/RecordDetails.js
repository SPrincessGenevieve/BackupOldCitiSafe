import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import KeyboardWithoutWrapper from "../components/KeyboardWithoutWrapper";
import GradientBackground from "../components/GradientBGR";
import Icon from "react-native-vector-icons/AntDesign";
import IconAdd from "react-native-vector-icons/MaterialIcons";
import { Table, Row, Rows } from "react-native-table-component";
import ConstButton from "../components/ConstButton";

function RecordDetails({ navigation }) {
  const [modal, setModal] = React.useState(false);
  const handleForm = () => {
    navigation.navigate("FormScreen");
  };

  const header = ["", ""];
  const data = [
    ["MFRTATCT NO.", "20230803"],
    ["Name", "Anna Nicole Gabriento"],
    ["Date", "02/02/2023"],
    ["Address", "Address Example"],
    ["Driver's License No.", "GA23-294329345-SADF"],
    ["Type", "Prof"],
    ["Date of Birth", "01/01/1990"],
    ["Nationality", "Filipino"],
    ["Vehicle Plate No", "ABC 123"],
    ["Make", "Toyota"],
    ["Model", "Camry"],
    ["Color", "Red"],
    ["Class", "Sedan"],
    ["Body Markings", "None"],
    ["Registered Owner", "John Doe"],
    ["Owner Address", "Owner Address"],
    ["Contact No.", "123-456-7890"],
    ["Violation", "Driving without wearing a helmet"],
    ["Time of Violation", "10:00 AM"],
    [
      "Place of Violation",
      "Zone 6, Cugman, Cagayan de Oro City, Misamis Oriental",
    ],
    ["Apprehending Officer", "Alduin Magallones"],
    ["Status", "Overdue"],
    ["Fine", "$100"],
  ];

  return (
    <View style={{ height: 900 }}>
      <GradientBackground></GradientBackground>
      {modal ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{ height: "100%", width: "100%" }}
            onPress={() => setModal(!modal)}
          >
            <View
              style={{
                backgroundColor: "black",
                opacity: 0.3,
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
            ></View>
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: "white",
              height: "80%",
              width: "90%",
              position: "absolute",
              borderRadius: 20,
              padding: 10,
            }}
          >
            <KeyboardWithoutWrapper>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ marginTop: 10 }}>
                  <Table style={styles.border}>
                    <Row style={styles.row} data={header} />
                    <Rows style={styles.row2} data={data} />
                  </Table>
                </View>
              </View>
            </KeyboardWithoutWrapper>
            <ConstButton name={"file1"} title={"RE-GENERATE"}></ConstButton>
          </View>
          <TouchableOpacity
            onPress={() => setModal(!modal)}
            style={{ position: "absolute", top: 20, right: 20 }}
          >
            <Icon name="close" color={"white"} size={40}></Icon>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={{ padding: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            borderRadius: 40,
            padding: 20,
          }}
        >
          <View
            style={{
              padding: 10,
              marginTop: 20,
              borderBottomWidth: 3,
              borderBottomColor: "#DCDCDC",
            }}
          >
            <Text style={{ fontSize: 15, color: "#BABABA" }}>
              Driver's Name
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Anna Nicole Gabriento
            </Text>
            <Text style={{ fontSize: 15, marginTop: 15, color: "#BABABA" }}>
              Driver's License Number
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              GA23-294329345-SADF
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              marginTop: 52,
              right: 0,
              marginRight: 30,
            }}
          >
            <Image
              style={{ height: 95, width: 95 }}
              source={require("./../../assets/images/profile.jpg")}
            ></Image>
          </View>
          <KeyboardWithoutWrapper>
            <>
              <View style={{ flexDirection: "column", flex: 1 }}>
                {/*<TouchableOpacity onPress={handleForm} style={{flexDirection:"column", marginTop: 20, justifyContent:"center", alignItems:"center", backgroundColor:"#2E54B3", flex: 1, borderRadius: 15, height: 50}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <IconAdd name='post-add' style={{color:"white", fontSize: 30, zIndex: 999}}></IconAdd>
                                <Text style={{fontSize: 20, color:"white"}}>Add violation</Text>
                            </View>
                        </TouchableOpacity>*/}
                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "center",
                      fontWeight: "bold",
                      height: 30,
                      paddingTop: 5,
                    }}
                  >
                    Violations
                  </Text>
                </View>

                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#BBBBBB",
                    marginTop: 20,
                  }}
                >
                  <View style={{ marginTop: 15 }}>
                    <Text
                      style={{
                        fontSize: 30,
                        textAlign: "center",
                        fontWeight: "bold",
                        height: 60,
                        paddingTop: 5,
                      }}
                    >
                      20230803
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      width: 400,
                      paddingRight: 66,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>
                      Driving without wearing a helmet
                    </Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", marginTop: 10, width: 200 }}
                  >
                    <Text style={{ marginRight: 10, fontWeight: "bold" }}>
                      Date:
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>02/02/2023</Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", marginTop: 10, width: 200 }}
                  >
                    <Text style={{ marginRight: 10, fontWeight: "bold" }}>
                      Place of Violation:
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      Zone 6, Cugman, Cagayan de Oro City, Misamis Oriental{" "}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ marginRight: 10, fontWeight: "bold" }}>
                      Offense:
                    </Text>
                    <Text style={{ fontWeight: "bold", color: "#998B11" }}>
                      First Offense
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ marginRight: 10, fontWeight: "bold" }}>
                      Payment Status:
                    </Text>
                    <Text style={{ fontWeight: "bold", color: "#932323" }}>
                      Overdue, 03/03/2023 4:00 PM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      paddingRight: 66,
                      width: 250,
                    }}
                  >
                    <Text style={{ marginRight: 10, fontWeight: "bold" }}>
                      Apprehending Officer:
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      Alduin Magallones
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      marginBottom: 20,
                    }}
                  >
                    <Text style={{ marginRight: 10, fontWeight: "bold" }}>
                      Images:
                    </Text>
                    <TouchableOpacity>
                      <Text style={{ color: "#2521FF" }}>
                        Additional Documentation
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      marginBottom: 20,
                    }}
                  >
                    <TouchableOpacity onPress={() => setModal(!modal)}>
                      <Text style={{ color: "#2521FF" }}>View more</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      marginBottom: 20,
                      justifyContent: "flex-end",
                    }}
                  >
                    <TouchableOpacity>
                      <Icon
                        name="printer"
                        style={{ fontSize: 30, textAlign: "right" }}
                      ></Icon>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          </KeyboardWithoutWrapper>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    width: 400,
    paddingRight: 90,
    marginLeft: 10,
  },
  row2: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flex: 1,
    borderWidth: 0.5,
  },
});

export default RecordDetails;
